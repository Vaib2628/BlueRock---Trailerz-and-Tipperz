import Image from 'next/image';
import { ABOUT_BODY_1, ABOUT_BODY_2, VEHICLE_CATEGORIES } from '@/lib/constants';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden about-section"
      style={{ background: '#0d1a2e' }}
      aria-labelledby="about-heading"
    >
      <style>{`
        /* ── Section padding ───────────────────────────── */
        .about-section { padding: 120px 60px; }

        @media (max-width: 1023px) {
          .about-section { padding: 80px 32px; }
        }
        @media (max-width: 767px) {
          .about-section { padding: 64px 20px; }
        }

        /* ── Two-col grid ──────────────────────────────── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        @media (max-width: 1199px) {
          .about-grid { gap: 60px; }
        }
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        /* ── Vehicle categories strip ──────────────────── */
        .vehicle-cats {
          display: flex;
          gap: 40px;
          margin-top: 48px;
          flex-wrap: wrap;
        }
        @media (max-width: 767px) {
          .vehicle-cats { gap: 24px; margin-top: 32px; }
        }

        /* ── Right visual wrapper ──────────────────────── */
        /*
          We give the wrapper an explicit height so absolutely-positioned
          children (main card + accent card) have a coordinate space.
          On desktop we use 580px; on large screens 640px; scales down on tablet.
          On mobile we switch to a tall auto-height column layout.
        */
        .about-visual {
          position: relative;
          height: 580px;
        }
        @media (min-width: 1400px) {
          .about-visual { height: 640px; }
        }
        @media (max-width: 1199px) {
          .about-visual { height: 500px; }
        }
        @media (max-width: 1023px) {
          /* tablet: visual is full-width below the text */
          .about-visual { height: 480px; }
        }
        @media (max-width: 767px) {
          /* mobile: overlapping cards */
          .about-visual {
            height: 400px;
            display: block;
          }
        }

        /* ── Main card (large photo card) ─────────────── */
        .about-main-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 64px;   /* leaves room for accent card */
          bottom: 64px;  /* leaves room for accent card */
          background: rgba(26,58,110,0.3);
          border: 1px solid rgba(200,169,110,0.15);
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .about-main-card {
            position: absolute;
            top: 0; left: 0; right: 20px; bottom: 20px;
            height: auto;
          }
        }

        /* ── Main card inner (image + overlay + text) ── */
        .about-main-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
        }
        @media (max-width: 767px) {
          .about-main-inner { padding: 24px; }
        }

        /* ── Accent card (gold "40" box) ───────────────── */
        .about-accent-card {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 200px;
          height: 180px;
          background: #c8a96e;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }
        @media (max-width: 1199px) {
          .about-accent-card { width: 180px; height: 160px; }
        }
        @media (max-width: 767px) {
          .about-accent-card {
            position: absolute;
            right: 0; bottom: 0;
            width: 140px;
            height: 120px;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            padding: 16px;
          }
          .about-accent-card .accent-num {
            font-size: 40px !important;
            line-height: 1;
            margin-bottom: 4px;
          }
        }

        /* ── Watermark ─────────────────────────────────── */
        .about-watermark {
          font-size: clamp(80px, 15vw, 220px);
        }
      `}</style>

      {/* Watermark */}
      <span
        className="about-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display whitespace-nowrap pointer-events-none select-none"
        style={{ letterSpacing: '10px', color: 'rgba(255,255,255,0.018)' }}
        aria-hidden="true"
      >
        BLUEROCK
      </span>

      <div className="about-grid">

        {/* ── Left: text content ─────────────────────────── */}
        <div className="reveal">
          <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
            <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
            <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
              Our Heritage
            </span>
          </div>

          <h2
            id="about-heading"
            className="font-display text-rock-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: '0.95',
              letterSpacing: '2px',
              marginBottom: '32px',
            }}
          >
            FORGED IN
            <br />
            <em className="font-serif font-light text-rock-sky" style={{ fontStyle: 'italic', fontSize: '0.85em' }}>
              steel &amp; trust
            </em>
          </h2>

          <p className="font-body text-white/55" style={{ fontSize: '15px', lineHeight: '1.9', maxWidth: '480px' }}>
            {ABOUT_BODY_1}
          </p>
          <p className="font-body text-white/55" style={{ fontSize: '15px', lineHeight: '1.9', maxWidth: '480px', marginTop: '20px' }}>
            {ABOUT_BODY_2}
          </p>

          {/* Vehicle category stats */}
          <div className="vehicle-cats">
            {VEHICLE_CATEGORIES.map((cat, i) => (
              <div key={cat.abbr} className="flex items-stretch" style={{ gap: '40px' }}>
                <div>
                  <div className="font-display text-rock-white" style={{ fontSize: 'clamp(32px, 3vw, 44px)', lineHeight: '1' }}>
                    {cat.abbr}
                  </div>
                  <div className="font-body text-rock-gold" style={{ fontSize: '10px', letterSpacing: '3px', marginTop: '4px' }}>
                    {cat.label}
                  </div>
                </div>
                {i < VEHICLE_CATEGORIES.length - 1 && (
                  <div className="self-stretch" style={{ width: '1px', background: 'rgba(200,169,110,0.15)' }} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: visual panel ────────────────────────── */}
        <div className="about-visual reveal reveal-delay-2">

          {/* Main photo card */}
          <div className="about-main-card">
            <div className="about-main-inner">
              <Image
                src="/products/workshop-interior.jpg"
                alt="BlueRock Tippers manufacturing facility in Navsari Gujarat — Commercial tipper trailer fabrication plant"
                title="BlueRock Tippers Manufacturing Facility - Navsari"
                fill
                className="object-cover object-center"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(0deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.3) 60%, rgba(10,22,40,0.2) 100%)' }}
              />
              <span
                className="absolute font-display uppercase text-white/60 z-10"
                style={{ top: '24px', left: '24px', fontSize: '11px', letterSpacing: '4px' }}
              >
                Est. 1984
              </span>
              <div className="font-display text-rock-white relative z-10" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '3px', marginBottom: '8px' }}>
                NAVSARI PLANT
              </div>
              <div className="font-body uppercase text-rock-gold relative z-10" style={{ fontSize: '12px', letterSpacing: '3px' }}>
                Gujarat
              </div>
            </div>
          </div>

          {/* Accent gold card */}
          <div className="about-accent-card" aria-label="40 Years of excellence">
            <div className="accent-num font-display text-rock-navy" style={{ fontSize: '56px', lineHeight: '1' }}>
              40
            </div>
            <div className="font-body uppercase" style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(10,22,40,0.7)' }}>
              Years of excellence
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}