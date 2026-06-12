'use client';

import { type FormEvent, useState } from 'react';
import { CONTACT_BODY, CONTACT_DETAILS, SELECT_OPTIONS } from '@/lib/constants';

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  requirements?: string;
}

function ContactIcon({ type }: { type: string }) {
  if (type === 'location') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }
  if (type === 'phone') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.94A16 16 0 0015.06 17.09l1.3-1.3a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    );
  }
  if (type === 'email') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const inputClass =
  'w-full font-body outline-none transition-all duration-300 placeholder:text-white/20 focus:border-rock-gold focus:bg-[rgba(200,169,110,0.05)]';
const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(200,169,110,0.15)',
  color: '#fafaf8',
  padding: '16px 20px',
  fontSize: '14px',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    const fullName = (formData.get('fullName') as string)?.trim();
    if (!fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    const email = (formData.get('email') as string)?.trim();
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phone = (formData.get('phone') as string)?.trim();
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }

    const company = (formData.get('company') as string)?.trim();
    if (!company) {
      newErrors.company = 'Company name is required';
    }

    const product = (formData.get('product') as string)?.trim();
    if (!product) {
      newErrors.product = 'Please select a product';
    }

    const requirements = (formData.get('requirements') as string)?.trim();
    if (!requirements) {
      newErrors.requirements = 'Please tell us your requirements';
    } else if (requirements.length < 10) {
      newErrors.requirements = 'Requirements must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Client-side validation
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Scroll to first error
      form.querySelector('[aria-invalid="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          product: formData.get('product'),
          requirements: formData.get('requirements'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Server returned validation errors → map back to fields
        if (response.status === 422 && data.fields) {
          setErrors(data.fields);
          return;
        }
        throw new Error(data.error || 'Failed to send enquiry');
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form', error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to send enquiry. Please try again or contact us directly at info@bluerocktippers.com'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-responsive"
      style={{ background: '#070f1d', padding: '120px 60px' }}
      aria-labelledby="contact-heading"
    >
      {/* Radial gradient: bottom half */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          top: '50%',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(26,58,110,0.35), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="reveal">
          {/* section-label */}
          <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
            <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
            <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
              Get In Touch
            </span>
          </div>
        </div>

        {/* contact-grid: grid 1fr 1fr; gap: 100px; margin-top: 80px */}
        <div
          className="contact-grid-responsive"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', marginTop: '80px' }}
        >
          {/* Info column */}
          <div className="reveal">
            {/* contact-info-title: font-size: 48px; letter-spacing: 2px; line-height: 1; margin-bottom: 32px */}
            <h2
              id="contact-heading"
              className="font-display text-rock-white"
              style={{ fontSize: '48px', letterSpacing: '2px', lineHeight: '1', marginBottom: '32px' }}
            >
              LET&apos;S BUILD
              <br />
              <em
                className="font-serif font-light text-rock-sky"
                style={{ display: 'block', fontStyle: 'italic', fontSize: '0.75em' }}
              >
                something together
              </em>
            </h2>
            <p className="font-body text-white/50" style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '400px' }}>
              {CONTACT_BODY}
            </p>

            {/* contact-details: flex col; gap: 24px; margin-top: 48px */}
            <address className="not-italic flex flex-col" style={{ gap: '24px', marginTop: '48px' }}>
              {CONTACT_DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start"
                  style={{ gap: '20px', paddingBottom: '24px', borderBottom: '1px solid rgba(200,169,110,0.08)' }}
                >
                  {/* contact-detail-icon: width 40px; height 40px; border; font-size: 16px */}
                  <div
                    className="flex items-center justify-center flex-shrink-0 text-rock-gold"
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(200,169,110,0.2)',
                      fontSize: '16px',
                    }}
                    aria-hidden="true"
                  >
                    <ContactIcon type={detail.iconType} />
                  </div>
                  <div>
                    {/* contact-detail-label: font-size: 9px; letter-spacing: 4px; margin-bottom: 4px */}
                    <div className="font-body uppercase text-rock-gold" style={{ fontSize: '9px', letterSpacing: '4px', marginBottom: '4px' }}>
                      {detail.label}
                    </div>
                    {/* contact-detail-value: font-size: 14px; line-height: 1.6 */}
                    <div className="font-body text-white/70 whitespace-pre-line" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </address>
          </div>

          {/* Form column */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="flex flex-col items-start" style={{ gap: '16px', paddingTop: '48px' }}>
                <div className="font-display text-rock-gold" style={{ fontSize: '32px', letterSpacing: '2px' }}>
                  ENQUIRY SENT
                </div>
                <p className="font-body text-white/60" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  Thank you for reaching out. Our team will respond within 24 hours with a specification proposal tailored to your needs.
                </p>
              </div>
            ) : (
              /* contact-form: display flex col; gap: 20px */
              <form className="flex flex-col" style={{ gap: '20px' }} onSubmit={handleSubmit} noValidate aria-label="Enquiry form">

                {/* form-row: grid 2col; gap: 16px */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {/* form-group: flex col; gap: 10px */}
                  <div className="flex flex-col" style={{ gap: '10px' }}>
                    <label htmlFor="full-name" className="font-body uppercase text-white/45" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                      Full Name <span className="text-rock-sky">*</span>
                    </label>
                    <input 
                      id="full-name" 
                      type="text" 
                      name="fullName" 
                      required 
                      placeholder="Rajesh Kumar" 
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        borderColor: errors.fullName ? '#ef4444' : 'rgba(200,169,110,0.15)',
                        backgroundColor: errors.fullName ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.04)',
                      }}
                    />
                    {errors.fullName && <span className="text-red-400 text-xs">{errors.fullName}</span>}
                  </div>
                  <div className="flex flex-col" style={{ gap: '10px' }}>
                    <label htmlFor="company" className="font-body uppercase text-white/45" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                      Company <span className="text-rock-sky">*</span>
                    </label>
                    <input 
                      id="company" 
                      type="text" 
                      name="company"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.company}
                      placeholder="Transport Co." 
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        borderColor: errors.company ? '#ef4444' : 'rgba(200,169,110,0.15)',
                        backgroundColor: errors.company ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.04)',
                      }}
                    />
                    {errors.company && <span className="text-red-400 text-xs">{errors.company}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="flex flex-col" style={{ gap: '10px' }}>
                    <label htmlFor="phone" className="font-body uppercase text-white/45" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                      Phone <span className="text-rock-sky">*</span>
                    </label>
                    <input 
                      id="phone" 
                      type="tel" 
                      name="phone"
                      required
                      aria-required="true"
                      placeholder="+91 00000 00000"
                      aria-invalid={!!errors.phone}
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        borderColor: errors.phone ? '#ef4444' : 'rgba(200,169,110,0.15)',
                        backgroundColor: errors.phone ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.04)',
                      }}
                    />
                    {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
                  </div>
                  <div className="flex flex-col" style={{ gap: '10px' }}>
                    <label htmlFor="email" className="font-body uppercase text-white/45" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                      Email <span className="text-rock-sky">*</span>
                    </label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      placeholder="you@company.com"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={`${inputClass} ${errors.email ? 'border-red-500 bg-red-500/5' : ''}`}
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? '#ef4444' : 'rgba(200,169,110,0.15)',
                        backgroundColor: errors.email ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.04)',
                      }}
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                  </div>
                </div>

                {/* Product select */}
                <div className="flex flex-col" style={{ gap: '10px' }}>
                  <label htmlFor="product" className="font-body uppercase text-white/45" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                    Product Interest <span className="text-rock-sky">*</span>
                  </label>
                  <select 
                    id="product" 
                    name="product" 
                    required
                    aria-required="true"
                    aria-invalid={!!errors.product}
                    className={`${inputClass} ${errors.product ? 'border-red-500 bg-red-500/5' : ''}`}
                    style={{
                      ...inputStyle,
                      borderColor: errors.product ? '#ef4444' : 'rgba(200,169,110,0.15)',
                      backgroundColor: errors.product ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.04)',
                    }}
                    aria-label="Select a product category"
                  >
                    <option value="">Select a product category</option>
                    {SELECT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.product && <span className="text-red-400 text-xs">{errors.product}</span>}
                </div>

                {/* Textarea */}
                <div className="flex flex-col" style={{ gap: '10px' }}>
                  <label htmlFor="requirements" className="font-body uppercase text-white/45" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                    Vehicle Platform &amp; Requirements <span className="text-rock-sky">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.requirements}
                    placeholder="Tell us your vehicle make/model, payload requirement, application (mining, construction, logistics, etc.)…"
                    className={`${inputClass} ${errors.requirements ? 'border-red-500 bg-red-500/5' : ''}`}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px',
                      borderColor: errors.requirements ? '#ef4444' : 'rgba(200,169,110,0.15)',
                      backgroundColor: errors.requirements ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.04)',
                    }}
                  />
                  {errors.requirements && <span className="text-red-400 text-xs">{errors.requirements}</span>}
                </div>

                {submitError && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#f87171',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="relative self-start overflow-hidden transition-all duration-300 group font-body uppercase text-rock-navy bg-rock-gold cursor-pointer border-none disabled:opacity-50"
                  style={{ padding: '20px 48px', fontSize: '11px', letterSpacing: '4px' }}
                  aria-label="Send enquiry to BlueRock"
                >
                  <span
                    className="absolute inset-0 bg-rock-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
