import { FEATURES } from '@/lib/constants';

function FeatureIcon({ iconExtra, iconPath }: { iconExtra?: string; iconPath: string }) {
  if (iconExtra === 'rect') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    );
  }
  if (iconExtra === 'clock') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.2" aria-hidden="true">
      <path d={iconPath} />
    </svg>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      style={{ background: 'linear-gradient(180deg, #0d1a2e, #0a1628)', padding: '120px 60px' }}
      className="section-responsive"
      aria-labelledby="features-heading"
    >
      <div className="reveal">
        {/* section-label */}
        <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
          <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
          <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
            Our Standards
          </span>
        </div>
        {/* section-title */}
        <h2
          id="features-heading"
          className="font-display text-rock-white"
          style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '0.95', letterSpacing: '2px' }}
        >
          THE BLUEROCK
          <br />
          <em className="font-serif font-light text-rock-sky" style={{ fontStyle: 'italic', fontSize: '0.85em' }}>
            difference
          </em>
        </h2>
      </div>

      {/* features-list: grid 4col; gap: 0; margin-top: 80px; border: 1px solid rgba(200,169,110,0.1) */}
      <div
        className="border border-[rgba(200,169,110,0.1)] features-grid-responsive"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: '80px' }}
        role="list"
      >
        {FEATURES.map((feat, i) => {
          const delayClasses = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'];
          const isLast = i === FEATURES.length - 1;

          return (
            <article
              key={feat.title}
              className={`relative overflow-hidden transition-colors duration-[400ms] hover:bg-[rgba(200,169,110,0.03)] group reveal ${delayClasses[i]}`}
              style={{
                padding: '48px 36px',
                borderRight: isLast ? 'none' : '1px solid rgba(200,169,110,0.1)',
              }}
              role="listitem"
              aria-label={feat.title}
            >
              {/* feature-icon-wrap: width 52px; height 52px; border; margin-bottom: 28px */}
              <div
                className="flex items-center justify-center transition-all duration-300 group-hover:border-rock-gold group-hover:bg-[rgba(200,169,110,0.08)]"
                style={{
                  width: '52px',
                  height: '52px',
                  border: '1px solid rgba(200,169,110,0.25)',
                  marginBottom: '28px',
                }}
                aria-hidden="true"
              >
                <FeatureIcon iconExtra={feat.iconExtra} iconPath={feat.iconPath} />
              </div>
              {/* feature-title: font-size: 20px; letter-spacing: 2px; margin-bottom: 12px */}
              <h3 className="font-display text-rock-white" style={{ fontSize: '20px', letterSpacing: '2px', marginBottom: '12px' }}>
                {feat.title}
              </h3>
              {/* feature-desc: font-size: 13px; line-height: 1.7 */}
              <p className="font-body" style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(250,250,248,0.45)' }}>
                {feat.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
