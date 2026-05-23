import Image from 'next/image';
import { HERO_DESC, HERO_EYEBROW, HERO_STATS } from '@/lib/constants';
import { BtnGhost, BtnPrimary } from '@/components/ui/primitives';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
      aria-label="Hero — Built for the road ahead"
    >
      <style>{`
        .hero-image-wrapper {
          position: absolute;
          height: 100%;
          width: 70%;
          top: 3rem;
          right: -3rem;
          bottom: 0;
        }
        @media (max-width: 1023px) {
          .hero-image-wrapper {
            width: 100%;
            top: 0;
            right: 0;
          }
        }
      `}</style>
      {/* ── Dark base ─────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0a1628 0%, #0d1f3d 40%, #111827 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Subtle gold grid ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* ── Rotating ring ─────────────────────────────────────────────── */}
      <div
        className="absolute rounded-full border border-[rgba(200,169,110,0.10)] hidden lg:block"
        style={{
          right: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '640px',
          height: '640px',
          animation: 'rotate-slow 30s linear infinite',
        }}
        aria-hidden="true"
      >
        <span
          className="absolute rounded-full border border-[rgba(74,144,217,0.10)]"
          style={{ inset: '40px' }}
        />
        <span
          className="absolute rounded-full border border-[rgba(200,169,110,0.07)]"
          style={{ inset: '100px' }}
        />
      </div>


      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND IMAGE — full viewport, CSS gradient creates the curve.
          No SVG paths needed. A radial-gradient ellipse centered left
          naturally curves outward in the middle, giving a smooth organic
          boundary between the dark bg and the truck photo.
      ══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="hero-image-wrapper">
          <Image
            // src="/products/bharatbenz-tipper.jpg"
            src="/campaign_images/brand_atmosphere_dusk_1778775998774.png"
            alt="BlueRock tippers trailers — Leading commercial vehicle body fabricator India. Premium tipper and trailer solutions for transport operators."
            title="BlueRock Tippers - Commercial Vehicle Body Manufacturer"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: '50% 50%', color: 'transparent' }}
            sizes="50vw"
          />
        </div>

        {/* ── Mobile overlay: heavy veil so text is always readable ──── */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: 'rgba(10,22,40,0.90)' }}
        />

        {/*
          ── Desktop overlay: CSS radial-gradient curved reveal ─────────

          radial-gradient(ellipse Rx Ry at Cx Cy, stops…)
            Rx = 72%   → horizontal radius (controls how far right the curve bulges)
            Ry = 130%  → vertical radius larger than 100% so the ellipse
                          extends well beyond top/bottom edges — making the
                          curve almost straight at extremes, bulging in centre
            Cx = 22%   → ellipse centre 22% from left edge
            Cy = 50%   → vertically centred

          Colour stops:
            0–44%  of radius → solid #0a1628 (left dark zone)
            44–68% of radius → smooth fade to near-transparent (curve zone)
            68–100%          → very light wash, then transparent

          At the vertical centre (y=50%) the dark boundary falls at:
            22% + 44% of 72% = 22% + 31.7% ≈ 53.7% from left
          At the top/bottom edges (y=0,100) the ellipse is much narrower
          horizontally, so the boundary pulls back left — this is what
          creates the natural inward curve at top and bottom.
        */}
        <div
  className="absolute inset-0 hidden lg:block"
  style={{
    background: `
      radial-gradient(
        ellipse 72% 130% at 22% 50%,
        #0a1628 0%,
        #0a1628 42%,
        rgba(10,22,40,0.92) 52%,
        rgba(10,22,40,0.72) 60%,
        rgba(10,22,40,0.42) 68%,
        rgba(10,22,40,0.18) 76%,
        rgba(10,22,40,0.06) 84%,
        transparent 92%
      )
    `,
  }}
/>

        {/* Top & bottom edge fades — both breakpoints */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.55) 0%, transparent 18%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(0deg, rgba(10,22,40,0.75) 0%, transparent 30%)' }}
        />
      </div>


      {/* ── Accent line ───────────────────────────────────────────────── */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: 0,
          bottom: '120px',
          width: '36%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div
        className="relative z-10 hero-content-responsive w-full"
        style={{ padding: '0 clamp(24px, 5vw, 60px)', maxWidth: '860px' }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center opacity-0 animate-fade-up-1"
          style={{ gap: '20px', marginBottom: '32px' }}
        >
          <span
            className="block bg-rock-gold flex-shrink-0"
            style={{ width: '60px', height: '1px' }}
            aria-hidden="true"
          />
          <span
            className="font-body uppercase text-rock-gold"
            style={{ fontSize: '11px', letterSpacing: '5px' }}
          >
            {HERO_EYEBROW}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-display text-rock-white opacity-0 animate-fade-up-2"
          style={{
            fontSize: 'clamp(52px, 9vw, 130px)',
            lineHeight: '0.9',
            letterSpacing: '2px',
            marginBottom: '8px',
          }}
        >
          BUILT FOR
          <br />
          <span className="text-rock-sky block">THE ROAD</span>
          <span
            className="font-serif italic font-light text-rock-gold block"
            style={{ fontSize: 'clamp(38px, 6vw, 90px)', letterSpacing: '0' }}
          >
            ahead.
          </span>
        </h1>

        {/* Description */}
        <p
          className="font-body text-white/55 opacity-0 animate-fade-up-3"
          style={{
            fontSize: '15px',
            lineHeight: '1.8',
            maxWidth: '460px',
            margin: '32px 0 48px',
          }}
        >
          {HERO_DESC}
        </p>

        {/* Actions */}
        <div
          className="flex flex-wrap items-center opacity-0 animate-fade-up-4"
          style={{ gap: '24px' }}
        >
          <BtnPrimary href="#products">Explore Products</BtnPrimary>
          <BtnGhost href="#about">Our Story</BtnGhost>
        </div>
      </div>

      {/* ── Stats — desktop only ──────────────────────────────────────── */}
      <div
        className="absolute opacity-0 animate-fade-up-5 hidden lg:flex"
        style={{ bottom: '60px', right: '60px', gap: '48px' }}
        aria-label="Key statistics"
      >
        {HERO_STATS.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-display text-rock-white"
              style={{ fontSize: '40px', letterSpacing: '2px', lineHeight: '1' }}
            >
              {stat.value}
              <span className="text-rock-gold" style={{ fontSize: '28px' }}>
                {stat.suffix}
              </span>
            </div>
            <div
              className="font-body uppercase text-white/40"
              style={{ fontSize: '10px', letterSpacing: '3px', marginTop: '4px' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <div
        className="absolute flex flex-col items-center opacity-0 animate-fade-up-6"
        style={{ bottom: '40px', left: 'clamp(24px, 5vw, 60px)', gap: '12px' }}
        aria-hidden="true"
      >
        <div
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(180deg, transparent, #c8a96e)',
            animation: 'scroll-line 2s ease-in-out infinite',
          }}
        />
        <span
          className="font-body uppercase text-white/40"
          style={{ fontSize: '9px', letterSpacing: '4px', writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
