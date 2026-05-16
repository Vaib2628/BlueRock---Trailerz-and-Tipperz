import Image from 'next/image';
import { PRODUCT_CARDS, PRODUCTS_BODY, TIPPER_FEATURED_DESC, TIPPER_VARIANTS } from '@/lib/constants';
import { ArrowSvg, BtnPrimary } from '@/components/ui/primitives';

export default function Products() {
  return (
    <section
      id="products"
      className="relative bg-rock-navy products-section"
      aria-labelledby="products-heading"
    >
      <style>{`
        /* ── Section padding ───────────────────────────── */
        .products-section { padding: 120px 60px; }

        @media (max-width: 1023px) {
          .products-section { padding: 80px 32px; }
        }
        @media (max-width: 767px) {
          .products-section { padding: 64px 20px; }
        }

        /* ── Header grid ───────────────────────────────── */
        .products-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
          align-items: end;
        }
        @media (max-width: 767px) {
          .products-header {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
          }
        }

        /* ── Products grid ─────────────────────────────── */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        @media (max-width: 1023px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Featured card ─────────────────────────────── */
        .product-featured {
          grid-column: span 2;
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 60px;
          min-height: 380px;
        }
        @media (max-width: 1023px) {
          .product-featured {
            grid-column: span 2;
            gap: 40px;
            padding: 48px 40px;
            min-height: 320px;
          }
        }
        @media (max-width: 767px) {
          .product-featured {
            grid-column: span 1;
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
            padding: 40px 28px;
            min-height: auto;
          }
        }

        /* ── Tipper variants strip ─────────────────────── */
        .tipper-variants {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .tipper-variants {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }
          .tipper-variants > div {
            flex: 1 1 auto;
            text-align: center;
            padding: 12px 16px !important;
          }
        }

        /* ── Regular product card ──────────────────────── */
        .product-card-regular {
          padding: 48px 36px;
          min-height: 300px;
        }
        @media (max-width: 1023px) {
          .product-card-regular {
            padding: 36px 28px;
            min-height: 260px;
          }
        }
        @media (max-width: 767px) {
          .product-card-regular {
            padding: 32px 24px;
            min-height: 220px;
          }
        }

        /* ── Product number ────────────────────────────── */
        .product-num {
          font-size: 48px;
          line-height: 1;
          margin-bottom: 32px;
        }
        @media (max-width: 767px) {
          .product-num {
            font-size: 36px;
            margin-bottom: 20px;
          }
        }

        /* ── Arrow position ────────────────────────────── */
        .product-arrow {
          position: absolute;
          bottom: 36px;
          right: 36px;
          width: 32px;
          height: 32px;
        }
        @media (max-width: 767px) {
          .product-arrow {
            bottom: 24px;
            right: 24px;
          }
        }

        /* ── Always show bg image on mobile (no hover on touch) ── */
        @media (max-width: 767px) {
          .product-card-regular .product-card-img {
            opacity: 0.2 !important;
          }
        }
      `}</style>

      {/* ── Header ───────────────────────────────────────── */}
      <div className="products-header">
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
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: '0.95', letterSpacing: '2px' }}
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

      {/* ── Products grid ────────────────────────────────── */}
      <div className="products-grid">

        {/* Featured card */}
        <article
          className="product-card product-featured relative overflow-hidden cursor-pointer transition-colors duration-[400ms] border border-[rgba(200,169,110,0.06)] reveal"
          style={{ background: '#080f1e' }}
          aria-label="Tipper Bodies — Flagship Series"
        >
          <Image
            src="/products/tipper-raised-dump.jpg"
            alt="BlueRock heavy duty tipper body at full dump angle"
            fill
            className="object-cover object-center opacity-30"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 66vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(8,15,30,0.96) 0%, rgba(8,15,30,0.7) 50%, rgba(8,15,30,0.3) 100%)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center" style={{ gap: '16px', marginBottom: '16px' }}>
              <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
              <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
                Flagship Series
              </span>
            </div>
            <h3
              className="font-display text-rock-white"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '4px', marginBottom: '16px' }}
            >
              TIPPER
              <br />
              BODIES
            </h3>
            <p className="font-body text-white/40" style={{ maxWidth: '360px', fontSize: '14px', lineHeight: '1.7' }}>
              {TIPPER_FEATURED_DESC}
            </p>
            <BtnPrimary href="#contact" style={{ marginTop: '32px', display: 'inline-flex' }}>
              Request Specification
            </BtnPrimary>
          </div>

          <div className="tipper-variants relative z-10">
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

        {/* Regular product cards */}
        {PRODUCT_CARDS.map((card, i) => {
          const delayClass = i % 3 === 0 ? '' : i % 3 === 1 ? 'reveal-delay-1' : 'reveal-delay-2';
          const isHighlighted = card.highlighted;

          const cardImages: Record<string, string> = {
            '02': '/products/cargo-box-body.jpg',
            '03': '/products/container-insulated.jpeg',
            '04': '/products/tip-trailer-flat-bed.jpeg',
            '05': '/products/hook-loader.jpeg',
            '06': '/products/tankers.jpeg',
            '07': '/products/garbage-tippers.jpeg',
            '08': '/products/custom-special-purpose.jpeg',
          };
          const imgSrc = cardImages[card.num];

          return (
            <article
              key={card.num}
              className={`product-card product-card-regular relative overflow-hidden cursor-pointer transition-colors duration-[400ms] border group reveal ${delayClass}`}
              style={{
                background: isHighlighted ? 'rgba(200,169,110,0.06)' : '#0d1a2e',
                borderColor: isHighlighted ? 'rgba(200,169,110,0.2)' : 'rgba(200,169,110,0.06)',
              }}
              aria-label={card.name}
            >
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt={card.name}
                  fill
                  className="product-card-img object-cover object-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              )}

              <span
                className="absolute top-0 left-0 bg-rock-gold transition-all duration-[400ms] h-0 group-hover:h-full"
                style={{ width: '3px' }}
                aria-hidden="true"
              />

              <div
                className="product-num font-display transition-colors duration-[400ms] relative z-10"
                style={{ color: isHighlighted ? 'rgba(200,169,110,0.3)' : 'rgba(200,169,110,0.1)' }}
                aria-hidden="true"
              >
                {card.num}
              </div>

              <h3
                className="font-display transition-colors duration-300 group-hover:text-rock-gold relative z-10"
                style={{
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  letterSpacing: '2px',
                  marginBottom: '12px',
                  color: isHighlighted ? '#c8a96e' : '#fafaf8',
                }}
              >
                {card.name}
              </h3>

              <p
                className="font-body transition-colors duration-300 group-hover:text-white/65 relative z-10"
                style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(250,250,248,0.4)' }}
              >
                {card.desc}
              </p>

              <div
                className="product-arrow rounded-full border border-[rgba(200,169,110,0.2)] flex items-center justify-center transition-all duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 z-10"
                style={isHighlighted ? { opacity: 1, transform: 'none', borderColor: 'rgba(200,169,110,0.4)' } : {}}
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