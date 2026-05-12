import { ABOUT_BODY_1, ABOUT_BODY_2, VEHICLE_CATEGORIES } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/primitives';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden section-responsive"
      style={{ background: '#0d1a2e', padding: '120px 60px' }}
      aria-labelledby="about-heading"
    >
      {/* Watermark */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: '220px', letterSpacing: '10px', color: 'rgba(255,255,255,0.018)' }}
        aria-hidden="true"
      >
        BLUEROCK
      </span>

      {/* section-grid-2: grid-template-columns: 1fr 1fr; gap: 100px; align-items: center */}
      <div
        className="grid items-center grid-responsive-2"
        style={{ gridTemplateColumns: '1fr 1fr', gap: '100px' }}
      >
        {/* Left */}
        <div className="reveal">
          {/* section-label: margin-bottom: 24px; gap: 16px */}
          <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
            <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
            <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
              Our Heritage
            </span>
          </div>

          {/* section-title: font-size clamp(48px,5vw,72px); line-height: 0.95; letter-spacing: 2px; margin-bottom: 32px */}
          <h2
            id="about-heading"
            className="font-display text-rock-white"
            style={{
              fontSize: 'clamp(48px, 5vw, 72px)',
              lineHeight: '0.95',
              letterSpacing: '2px',
              marginBottom: '32px',
            }}
          >
            FORGED IN
            <br />
            <em
              className="font-serif font-light text-rock-sky"
              style={{ fontStyle: 'italic', fontSize: '0.85em' }}
            >
              steel &amp; trust
            </em>
          </h2>

          {/* section-body: font-size: 15px; line-height: 1.9; max-width: 480px */}
          <p className="font-body text-white/55" style={{ fontSize: '15px', lineHeight: '1.9', maxWidth: '480px' }}>
            {ABOUT_BODY_1}
          </p>
          {/* section-body + section-body: margin-top: 20px */}
          <p className="font-body text-white/55" style={{ fontSize: '15px', lineHeight: '1.9', maxWidth: '480px', marginTop: '20px' }}>
            {ABOUT_BODY_2}
          </p>

          {/* Vehicle categories: margin-top: 48px; display: flex; gap: 40px */}
          <div className="flex" style={{ marginTop: '48px', gap: '40px' }}>
            {VEHICLE_CATEGORIES.map((cat, i) => (
              <div key={cat.abbr} className="flex items-stretch" style={{ gap: '40px' }}>
                <div>
                  <div className="font-display text-rock-white" style={{ fontSize: '44px', lineHeight: '1' }}>
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

        {/* Right — about-visual: position: relative; height: 500px */}
        <div className="reveal reveal-delay-2 relative" style={{ height: '500px' }}>
          {/* about-card-main: position: absolute; inset: 0 60px 60px 0; background: rgba(26,58,110,0.3); border: 1px solid rgba(200,169,110,0.15); padding: 32px */}
          <div
            className="absolute border"
            style={{
              inset: '0 60px 60px 0',
              background: 'rgba(26,58,110,0.3)',
              borderColor: 'rgba(200,169,110,0.15)',
              padding: '32px',
            }}
          >
            {/* about-main-content: height: 100%; background: ...; display: flex; flex-direction: column; justify-content: flex-end; padding: 32px */}
            <div
              className="relative h-full flex flex-col justify-end"
              style={{
                padding: '32px',
                background:
                  'linear-gradient(135deg, rgba(26,58,110,0.4), rgba(10,22,40,0.8)), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(200,169,110,0.03) 10px, rgba(200,169,110,0.03) 11px)',
              }}
            >
              {/* about-since: top: 24px; left: 24px; font-size: 11px; letter-spacing: 4px */}
              <span
                className="absolute font-display uppercase text-white/30"
                style={{ top: '24px', left: '24px', fontSize: '11px', letterSpacing: '4px' }}
              >
                Est. 1984
              </span>
              {/* about-main-title: font-size: 32px; letter-spacing: 3px; margin-bottom: 8px */}
              <div className="font-display text-rock-white" style={{ fontSize: '32px', letterSpacing: '3px', marginBottom: '8px' }}>
                CHAKAN PLANT
              </div>
              {/* about-main-sub: font-size: 12px; letter-spacing: 3px */}
              <div className="font-body uppercase text-rock-gold" style={{ fontSize: '12px', letterSpacing: '3px' }}>
                Pune, Maharashtra
              </div>
            </div>
          </div>

          {/* about-card-accent: right: 0; bottom: 0; width: 200px; height: 180px; background: rock-gold; padding: 24px */}
          <div
            className="absolute bg-rock-gold flex flex-col justify-end"
            style={{ right: 0, bottom: 0, width: '200px', height: '180px', padding: '24px' }}
            aria-label="40 Years of excellence"
          >
            {/* about-card-accent-num: font-size: 56px; color: navy; line-height: 1 */}
            <div className="font-display text-rock-navy" style={{ fontSize: '56px', lineHeight: '1' }}>
              40
            </div>
            {/* about-card-accent-label: font-size: 10px; letter-spacing: 3px */}
            <div className="font-body uppercase" style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(10,22,40,0.7)' }}>
              Years of excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
