import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// ── helpers ──────────────────────────────────────────────────────────────────

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string): boolean => {
  return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
};

// ── Google Sheets ─────────────────────────────────────────────────────────────

async function submitToGoogleSheets(data: {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  requirements: string;
}) {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  if (!scriptUrl) throw new Error('Google Sheets script URL not configured');

  // Google Apps Script doPost reads e.parameter (form-encoded), not JSON.
  // We must send application/x-www-form-urlencoded and follow the redirect.
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const formBody = new URLSearchParams({
    fullName: data.fullName,
    company: data.company,
    email: data.email,
    phone: data.phone,
    product: data.product,
    requirements: data.requirements,
    timestamp,
  });

  const response = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody.toString(),
    redirect: 'follow',
  });

  // Apps Script returns 200 with JSON on success;
  // a non-OK status means something went wrong.
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Sheets responded with ${response.status}: ${text.slice(0, 200)}`);
  }

  // Response may be plain text or JSON – either is fine
  const text = await response.text();
  try { return JSON.parse(text); } catch { return { raw: text }; }
}

// ── Email templates ───────────────────────────────────────────────────────────

function buildOwnerEmail(data: {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  requirements: string;
}) {
  const { fullName, company, email, phone, product, requirements } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Enquiry – BlueRock Tippers</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:4px;overflow:hidden;border:1px solid rgba(200,169,110,0.2);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a3a6e 0%,#0d1f3c 100%);padding:40px 48px;text-align:center;">
            <p style="margin:0 0 8px;color:rgba(200,169,110,0.8);font-size:10px;letter-spacing:5px;text-transform:uppercase;">BlueRock Tippers &amp; Trailerz</p>
            <h1 style="margin:0;color:#fafaf8;font-size:28px;font-weight:700;letter-spacing:2px;">🔔 NEW ENQUIRY RECEIVED</h1>
            <p style="margin:12px 0 0;color:rgba(255,255,255,0.5);font-size:13px;">${timestamp}</p>
          </td>
        </tr>

        <!-- Alert bar -->
        <tr>
          <td style="background:rgba(200,169,110,0.12);border-top:2px solid #c8a96e;border-bottom:2px solid rgba(200,169,110,0.2);padding:16px 48px;text-align:center;">
            <p style="margin:0;color:#c8a96e;font-size:13px;letter-spacing:1px;">
              A new customer enquiry has been submitted via your website
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 48px;">

            <!-- Customer Info -->
            <h2 style="margin:0 0 20px;color:#c8a96e;font-size:11px;letter-spacing:4px;text-transform:uppercase;border-bottom:1px solid rgba(200,169,110,0.15);padding-bottom:12px;">Customer Details</h2>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Full Name</span><br>
                  <span style="color:#fafaf8;font-size:16px;font-weight:600;margin-top:4px;display:block;">${fullName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Email</span><br>
                  <a href="mailto:${email}" style="color:#7aadde;font-size:15px;text-decoration:none;margin-top:4px;display:block;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Phone</span><br>
                  <a href="tel:${phone || ''}" style="color:#7aadde;font-size:15px;text-decoration:none;margin-top:4px;display:block;">${phone || '—'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="color:rgba(255,255,255,0.4);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Company</span><br>
                  <span style="color:#fafaf8;font-size:15px;margin-top:4px;display:block;">${company || '—'}</span>
                </td>
              </tr>
            </table>

            <!-- Product Interest -->
            <h2 style="margin:32px 0 20px;color:#c8a96e;font-size:11px;letter-spacing:4px;text-transform:uppercase;border-bottom:1px solid rgba(200,169,110,0.15);padding-bottom:12px;">Product Interest</h2>
            <div style="background:rgba(200,169,110,0.08);border:1px solid rgba(200,169,110,0.2);border-radius:4px;padding:16px 20px;">
              <p style="margin:0;color:#c8a96e;font-size:17px;font-weight:700;letter-spacing:1px;">${product}</p>
            </div>

            <!-- Requirements -->
            <h2 style="margin:32px 0 20px;color:#c8a96e;font-size:11px;letter-spacing:4px;text-transform:uppercase;border-bottom:1px solid rgba(200,169,110,0.15);padding-bottom:12px;">Requirements</h2>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:20px 24px;">
              <p style="margin:0;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.8;white-space:pre-wrap;">${requirements}</p>
            </div>

            <!-- CTA -->
            <div style="margin-top:36px;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your Enquiry – BlueRock Tippers" 
                 style="display:inline-block;background:#c8a96e;color:#0d1f3c;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:16px 40px;border-radius:2px;">
                Reply to Customer
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:rgba(0,0,0,0.3);padding:24px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;color:rgba(255,255,255,0.3);font-size:11px;line-height:1.6;">
              BlueRock Tippers &amp; Trailerz · Block no. 460/1, Alipore, Navsari – 396409, Gujarat<br>
              +91 77963 71155 · info@bluerocktippers.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildCustomerEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  requirements: string;
}) {
  const { fullName, company, product, requirements } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Enquiry Received – BlueRock Tippers</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:4px;overflow:hidden;border:1px solid rgba(200,169,110,0.2);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a3a6e 0%,#0d1f3c 100%);padding:48px 48px 40px;text-align:center;">
            <p style="margin:0 0 8px;color:rgba(200,169,110,0.8);font-size:10px;letter-spacing:5px;text-transform:uppercase;">BlueRock Tippers &amp; Trailerz · Est. 1984</p>
            <h1 style="margin:0;color:#fafaf8;font-size:26px;font-weight:700;letter-spacing:2px;">ENQUIRY RECEIVED</h1>
            <p style="margin:14px 0 0;color:rgba(255,255,255,0.5);font-size:13px;">We'll get back to you within <strong style="color:#c8a96e;">24 hours</strong></p>
          </td>
        </tr>

        <!-- Greeting -->
        <tr>
          <td style="padding:40px 48px 0;">
            <p style="margin:0 0 20px;color:#fafaf8;font-size:16px;line-height:1.7;">
              Dear <strong>${fullName}</strong>,
            </p>
            <p style="margin:0;color:rgba(255,255,255,0.65);font-size:14px;line-height:1.8;">
              Thank you for reaching out to <strong style="color:#c8a96e;">BlueRock Tippers &amp; Trailerz</strong>. 
              We have received your enquiry and our engineering team will review your requirements shortly.
            </p>
            <p style="margin:16px 0 0;color:rgba(255,255,255,0.65);font-size:14px;line-height:1.8;">
              You can expect a detailed, customised specification proposal in your inbox within the next 24 hours.
            </p>
          </td>
        </tr>

        <!-- Summary card -->
        <tr>
          <td style="padding:32px 48px;">
            <div style="background:rgba(200,169,110,0.06);border:1px solid rgba(200,169,110,0.2);border-radius:4px;padding:28px 28px 24px;">
              <h2 style="margin:0 0 20px;color:#c8a96e;font-size:10px;letter-spacing:4px;text-transform:uppercase;">Your Enquiry Summary</h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="160" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                    <span style="color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Submitted</span>
                  </td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                    <span style="color:#fafaf8;font-size:13px;">${timestamp}</span>
                  </td>
                </tr>
                ${company ? `<tr>
                  <td width="160" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                    <span style="color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Company</span>
                  </td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                    <span style="color:#fafaf8;font-size:13px;">${company}</span>
                  </td>
                </tr>` : ''}
                <tr>
                  <td width="160" style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                    <span style="color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Product Interest</span>
                  </td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
                    <span style="color:#c8a96e;font-size:13px;font-weight:600;">${product}</span>
                  </td>
                </tr>
                <tr>
                  <td width="160" style="padding:8px 0;vertical-align:top;">
                    <span style="color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Requirements</span>
                  </td>
                  <td style="padding:8px 0;vertical-align:top;">
                    <span style="color:rgba(255,255,255,0.75);font-size:13px;line-height:1.7;display:block;">${requirements}</span>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- What happens next -->
        <tr>
          <td style="padding:0 48px 36px;">
            <h2 style="margin:0 0 20px;color:#fafaf8;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">What Happens Next?</h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="32" style="vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:#c8a96e;border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#0d1f3c;">1</div>
                </td>
                <td style="padding:0 0 16px 12px;">
                  <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;line-height:1.7;">Our engineering team reviews your vehicle platform &amp; payload requirement.</p>
                </td>
              </tr>
              <tr>
                <td width="32" style="vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:#c8a96e;border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#0d1f3c;">2</div>
                </td>
                <td style="padding:0 0 16px 12px;">
                  <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;line-height:1.7;">We prepare a customised specification proposal tailored to your needs.</p>
                </td>
              </tr>
              <tr>
                <td width="32" style="vertical-align:top;padding-top:2px;">
                  <div style="width:24px;height:24px;background:#c8a96e;border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#0d1f3c;">3</div>
                </td>
                <td style="padding:0 0 0 12px;">
                  <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;line-height:1.7;">You'll receive a detailed reply within <strong style="color:#c8a96e;">24 hours</strong>.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Contact us -->
        <tr>
          <td style="padding:0 48px 40px;">
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:20px 24px;">
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.4);font-size:10px;letter-spacing:3px;text-transform:uppercase;">Need urgent help?</p>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:13px;line-height:1.8;">
                📞 <a href="tel:+917796371155" style="color:#7aadde;text-decoration:none;">+91 77963 71155</a><br>
                ✉️ <a href="mailto:info@bluerocktippers.com" style="color:#7aadde;text-decoration:none;">info@bluerocktippers.com</a>
              </p>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:rgba(0,0,0,0.3);padding:24px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0 0 8px;color:rgba(255,255,255,0.3);font-size:11px;line-height:1.6;">
              BlueRock Tippers &amp; Trailerz · Block no. 460/1, Alipore, Navsari – 396409, Gujarat
            </p>
            <p style="margin:0;color:rgba(255,255,255,0.2);font-size:10px;">
              © 2025 BlueRock Tippers and Trailerz. All rights reserved.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      company = '',
      email,
      phone = '',
      product,
      requirements,
    } = body as {
      fullName: string;
      company?: string;
      email: string;
      phone?: string;
      product: string;
      requirements: string;
    };

    // ── Server-side validation ────────────────────────────────────────────────
    const validationErrors: Record<string, string> = {};

    if (!fullName?.trim() || fullName.trim().length < 2) {
      validationErrors.fullName = 'Full name must be at least 2 characters';
    }
    if (!company?.trim()) {
      validationErrors.company = 'Company name is required';
    }
    if (!email?.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email.trim())) {
      validationErrors.email = 'Please enter a valid email address';
    }
    if (!phone?.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone.trim())) {
      validationErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }
    if (!product?.trim()) {
      validationErrors.product = 'Please select a product';
    }
    if (!requirements?.trim() || requirements.trim().length < 10) {
      validationErrors.requirements = 'Requirements must be at least 10 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', fields: validationErrors },
        { status: 422 }
      );
    }

    const sanitised = {
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      product: product.trim(),
      requirements: requirements.trim(),
    };

    const errors: string[] = [];

    // ── 1. Google Sheets ──────────────────────────────────────────────────────
    try {
      await submitToGoogleSheets(sanitised);
    } catch (sheetsError) {
      const msg = sheetsError instanceof Error ? sheetsError.message : String(sheetsError);
      console.error('[Google Sheets] Failed:', msg);
      errors.push(`Google Sheets: ${msg}`);
    }

    // ── 2. Email ──────────────────────────────────────────────────────────────
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass || !adminEmail) {
      const missingVars = [
        !smtpUser && 'SMTP_USER',
        !smtpPass && 'SMTP_PASSWORD',
        !adminEmail && 'ADMIN_EMAIL',
      ]
        .filter(Boolean)
        .join(', ');
      console.error(`[Email] Missing env vars: ${missingVars}`);
      errors.push(`Email not sent – missing configuration: ${missingVars}`);
    } else {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true',
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.verify();

        // Owner notification
        await transporter.sendMail({
          from: `"BlueRock Website" <${fromEmail}>`,
          to: adminEmail,
          subject: `🔔 New Enquiry: ${sanitised.product} – ${sanitised.fullName}`,
          html: buildOwnerEmail(sanitised),
          replyTo: sanitised.email,
        });

        // Customer acknowledgement
        await transporter.sendMail({
          from: `"BlueRock Tippers" <${fromEmail}>`,
          to: sanitised.email,
          subject: 'Your Enquiry is Received – BlueRock Tippers',
          html: buildCustomerEmail(sanitised),
        });

        transporter.close();
      } catch (emailError) {
        const msg = emailError instanceof Error ? emailError.message : String(emailError);
        console.error('[Email] Failed:', msg);
        errors.push(`Email: ${msg}`);
      }
    }

    // If both failed, return 500
    if (errors.length === 2) {
      return NextResponse.json(
        {
          error: 'Both Google Sheets and email failed. Please contact us directly.',
          details: errors,
        },
        { status: 500 }
      );
    }

    // Partial success is still a success from the user's perspective
    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry submitted successfully',
        warnings: errors.length > 0 ? errors : undefined,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[send-enquiry] Unhandled error:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
