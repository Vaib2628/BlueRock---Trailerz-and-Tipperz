import { WHY_CARDS, WHY_NUMBERS, WHY_QUOTE, WHY_QUOTE_ATTR } from '@/lib/constants';

export default function WhyUs() {
  return (
    <section
      className="relative bg-rock-navy section-responsive"
      style={{ padding: '120px 60px' }}
      aria-labelledby="why-heading"
    >
      <div className="reveal">
        {/* section-label */}
        <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
          <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
          <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
            Why Choose BlueRock
          </span>
        </div>
        {/* section-title */}
        <h2
          id="why-heading"
          className="font-display text-rock-white"
          style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '0.95', letterSpacing: '2px' }}
        >
          OPERATORS
          <br />
          <em className="font-serif font-light text-rock-sky" style={{ fontStyle: 'italic', fontSize: '0.85em' }}>
            trust us
          </em>
        </h2>
      </div>

      {/* why-grid: grid 1.2fr 1fr; gap: 80px; margin-top: 80px; align-items: start */}
      <div
        className="items-start why-grid-responsive"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          marginTop: '80px',
        }}
      >
        {/* why-cards: display flex col; gap: 2px */}
        <div className="flex flex-col" style={{ gap: '2px' }} role="list">
          {WHY_CARDS.map((card, i) => {
            const delayClasses = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];
            return (
              <article
                key={card.num}
                className={`flex cursor-default transition-all duration-300 hover:border-[rgba(200,169,110,0.2)] hover:bg-[rgba(26,58,110,0.2)] reveal ${delayClasses[i]}`}
                style={{
                  gap: '24px',
                  padding: '32px',
                  background: 'rgba(13,26,46,0.8)',
                  border: '1px solid rgba(200,169,110,0.08)',
                }}
                role="listitem"
                aria-label={card.title}
              >
                {/* why-card-num: font-size: 14px; letter-spacing: 2px; opacity: 0.6; padding-top: 4px */}
                <span
                  className="font-display text-rock-gold flex-shrink-0"
                  style={{ fontSize: '14px', letterSpacing: '2px', opacity: '0.6', paddingTop: '4px' }}
                >
                  {card.num}
                </span>
                <div>
                  {/* why-card-title: font-size: 20px; letter-spacing: 2px; margin-bottom: 8px */}
                  <h3 className="font-display text-rock-white" style={{ fontSize: '20px', letterSpacing: '2px', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  {/* why-card-body: font-size: 13px; line-height: 1.7 */}
                  <p className="font-body" style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(250,250,248,0.45)' }}>
                    {card.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* why-visual: position sticky; top: 120px */}
        <div className="reveal reveal-delay-2" style={{ position: 'sticky', top: '120px' }}>
          {/* why-quote: border-left: 2px solid gold; padding: 32px 36px; margin-bottom: 32px */}
          <blockquote
            style={{
              borderLeft: '2px solid #c8a96e',
              padding: '32px 36px',
              background: 'rgba(13,26,46,0.6)',
              marginBottom: '32px',
            }}
          >
            {/* why-quote-text: font-size: 22px; line-height: 1.6; margin-bottom: 20px */}
            <p
              className="font-serif italic font-light"
              style={{ fontSize: '22px', lineHeight: '1.6', color: 'rgba(250,250,248,0.85)', marginBottom: '20px' }}
            >
              {WHY_QUOTE}
            </p>
            {/* why-quote-attr: font-size: 11px; letter-spacing: 3px */}
            <cite className="not-italic font-body uppercase text-rock-gold" style={{ fontSize: '11px', letterSpacing: '3px' }}>
              {WHY_QUOTE_ATTR}
            </cite>
          </blockquote>

          {/* why-number-block: grid 2col; gap: 2px */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }} role="list" aria-label="Key metrics">
            {WHY_NUMBERS.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: '28px',
                  background: 'rgba(13,26,46,0.8)',
                  border: '1px solid rgba(200,169,110,0.08)',
                }}
                role="listitem"
              >
                {/* why-number-val: font-size: 42px; line-height: 1; margin-bottom: 6px */}
                <div className="font-display text-rock-white" style={{ fontSize: '42px', lineHeight: '1', marginBottom: '6px' }}>
                  {item.value}
                  <span className="text-rock-gold">{item.suffix}</span>
                </div>
                {/* why-number-label: font-size: 10px; letter-spacing: 3px */}
                <div className="font-body uppercase" style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(250,250,248,0.35)' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
