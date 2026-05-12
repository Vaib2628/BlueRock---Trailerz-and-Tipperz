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
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(26,58,110,0.5) 0%, transparent 70%), linear-gradient(135deg, #0a1628 0%, #0d1f3d 40%, #111827 100%)',
        }}
        aria-hidden="true"
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Rotating circle */}
      <div
        className="absolute rounded-full border border-[rgba(200,169,110,0.12)]"
        style={{
          right: '-100px',
          top: '50%',
          width: '700px',
          height: '700px',
          animation: 'rotate-slow 30s linear infinite',
        }}
        aria-hidden="true"
      >
        <span
          className="absolute rounded-full border border-[rgba(74,144,217,0.12)]"
          style={{ inset: '40px' }}
        />
        <span
          className="absolute rounded-full border border-[rgba(200,169,110,0.08)]"
          style={{ inset: '100px' }}
        />
      </div>

      {/* Accent line */}
      <div
        className="absolute"
        style={{
          left: 0,
          bottom: '120px',
          width: '40%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Content — padding: 0 60px, max-width: 900px */}
      <div
        className="relative hero-content-responsive"
        style={{ padding: '0 60px', maxWidth: '900px' }}
      >
        {/* Eyebrow — margin-bottom: 32px */}
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

        {/* H1 — line-height: 0.9, letter-spacing: 2px, margin-bottom: 8px */}
        <h1
          className="font-display text-rock-white opacity-0 animate-fade-up-2"
          style={{
            fontSize: 'clamp(72px, 9vw, 130px)',
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
            style={{ fontSize: 'clamp(50px, 6vw, 90px)', letterSpacing: '0' }}
          >
            ahead.
          </span>
        </h1>

        {/* Description — margin: 32px 0 48px */}
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

        {/* Actions — gap: 24px */}
        <div
          className="flex items-center opacity-0 animate-fade-up-4"
          style={{ gap: '24px' }}
        >
          <BtnPrimary href="#products">Explore Products</BtnPrimary>
          <BtnGhost href="#about">Our Story</BtnGhost>
        </div>
      </div>

      {/* Stats — bottom: 60px, right: 60px, gap: 48px */}
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

      {/* Scroll indicator — bottom: 40px, left: 60px, gap: 12px */}
      <div
        className="absolute flex flex-col items-center opacity-0 animate-fade-up-6"
        style={{ bottom: '40px', left: '60px', gap: '12px' }}
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
