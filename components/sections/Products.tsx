import { PRODUCT_CARDS, PRODUCTS_BODY, TIPPER_FEATURED_DESC, TIPPER_VARIANTS } from '@/lib/constants';
import { ArrowSvg, BtnPrimary } from '@/components/ui/primitives';

export default function Products() {
  return (
    <section
      id="products"
      className="relative bg-rock-navy section-responsive"
      style={{ padding: '120px 60px' }}
      aria-labelledby="products-heading"
    >
      {/* products-header: grid 1fr 1fr; gap: 40px; margin-bottom: 80px; align-items: end */}
      <div
        className="grid items-end products-header-responsive"
        style={{ gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px' }}
      >
        <div className="reveal">
          <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
            <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
            <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
              What We Build
            </span>
          </div>
          <h2
            id="products-heading"
            className="font-display text-rock-white"
            style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '0.95', letterSpacing: '2px' }}
          >
            OUR
            <br />
            <em className="font-serif font-light text-rock-sky" style={{ fontStyle: 'italic', fontSize: '0.85em' }}>
              product range
            </em>
          </h2>
        </div>
        <div className="reveal reveal-delay-1">
          <p className="font-body text-white/55" style={{ fontSize: '15px', lineHeight: '1.9', maxWidth: '480px' }}>
            {PRODUCTS_BODY}
          </p>
        </div>
      </div>

      {/* products-grid: grid 3col; gap: 2px */}
      <div className="grid products-grid-responsive" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>

        {/* Featured card: grid-column: span 2; display: flex; align-items: center; gap: 60px; padding: 60px */}
        <article
          className="product-card relative overflow-hidden cursor-pointer transition-colors duration-[400ms] border border-[rgba(200,169,110,0.06)] reveal"
          style={{
            gridColumn: 'span 2',
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            padding: '60px',
            background: 'linear-gradient(135deg, rgba(26,58,110,0.6), rgba(10,22,40,0.9))',
          }}
          aria-label="Tipper Bodies — Flagship Series"
        >
          <div>
            {/* section-label: margin-bottom: 16px (inline override) */}
            <div className="flex items-center" style={{ gap: '16px', marginBottom: '16px' }}>
              <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
              <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
                Flagship Series
              </span>
            </div>
            {/* product-name featured: font-size: 36px; letter-spacing: 4px; margin-bottom: 16px */}
            <h3
              className="font-display text-rock-white"
              style={{ fontSize: '36px', letterSpacing: '4px', marginBottom: '16px' }}
            >
              TIPPER
              <br />
              BODIES
            </h3>
            {/* product-desc featured: max-width: 360px; font-size: 14px */}
            <p className="font-body text-white/40" style={{ maxWidth: '360px', fontSize: '14px', lineHeight: '1.7' }}>
              {TIPPER_FEATURED_DESC}
            </p>
            {/* btn-primary: margin-top: 32px */}
            <BtnPrimary href="#contact" style={{ marginTop: '32px', display: 'inline-flex' }}>
              Request Specification
            </BtnPrimary>
          </div>

          {/* Tipper variants: flex-direction: column; gap: 12px; flex-shrink: 0 */}
          <div className="flex flex-col flex-shrink-0" style={{ gap: '12px' }}>
            {TIPPER_VARIANTS.map((v) => (
              <div
                key={v.label}
                style={
                  v.variant === 'gold'
                    ? { background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.15)', padding: '16px 24px' }
                    : { background: 'rgba(74,144,217,0.1)', border: '1px solid rgba(74,144,217,0.2)', padding: '16px 24px' }
                }
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '3px',
                    color: v.variant === 'gold' ? '#c8a96e' : '#4a90d9',
                  }}
                >
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </article>

        {/* Regular product cards: padding: 48px 36px */}
        {PRODUCT_CARDS.map((card, i) => {
          const delayClass = i % 3 === 0 ? '' : i % 3 === 1 ? 'reveal-delay-1' : 'reveal-delay-2';
          const isHighlighted = card.highlighted;

          return (
            <article
              key={card.num}
              className={`product-card relative overflow-hidden cursor-pointer transition-colors duration-[400ms] border group reveal ${delayClass}`}
              style={{
                background: isHighlighted ? 'rgba(200,169,110,0.06)' : '#0d1a2e',
                borderColor: isHighlighted ? 'rgba(200,169,110,0.2)' : 'rgba(200,169,110,0.06)',
                padding: '48px 36px',
              }}
              aria-label={card.name}
            >
              {/* Left accent bar: width 3px; height: 0 → 100% on hover */}
              <span
                className="absolute top-0 left-0 bg-rock-gold transition-all duration-[400ms] h-0 group-hover:h-full"
                style={{ width: '3px' }}
                aria-hidden="true"
              />

              {/* product-num: font-size: 48px; margin-bottom: 32px */}
              <div
                className="font-display transition-colors duration-[400ms]"
                style={{
                  fontSize: '48px',
                  lineHeight: '1',
                  marginBottom: '32px',
                  color: isHighlighted ? 'rgba(200,169,110,0.3)' : 'rgba(200,169,110,0.1)',
                }}
                aria-hidden="true"
              >
                {card.num}
              </div>

              {/* product-name: font-size: 24px; letter-spacing: 2px; margin-bottom: 12px */}
              <h3
                className="font-display transition-colors duration-300 group-hover:text-rock-gold"
                style={{
                  fontSize: '24px',
                  letterSpacing: '2px',
                  marginBottom: '12px',
                  color: isHighlighted ? '#c8a96e' : '#fafaf8',
                }}
              >
                {card.name}
              </h3>

              {/* product-desc: font-size: 13px; line-height: 1.7 */}
              <p
                className="font-body transition-colors duration-300 group-hover:text-white/65"
                style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(250,250,248,0.4)' }}
              >
                {card.desc}
              </p>

              {/* product-arrow: bottom: 36px; right: 36px; width: 32px; height: 32px */}
              <div
                className="absolute rounded-full border border-[rgba(200,169,110,0.2)] flex items-center justify-center transition-all duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                style={{
                  bottom: '36px',
                  right: '36px',
                  width: '32px',
                  height: '32px',
                  ...(isHighlighted ? { opacity: 1, transform: 'none', borderColor: 'rgba(200,169,110,0.4)' } : {}),
                }}
                aria-hidden="true"
              >
                <ArrowSvg />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
