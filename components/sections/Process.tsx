import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-rock-darkgray section-responsive"
      style={{ padding: '120px 60px' }}
      aria-labelledby="process-heading"
    >
      {/* Angled blue overlay: left 0; top 0; bottom 0; width: 40%; clip-path */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: '40%',
          background: 'rgba(26,58,110,0.15)',
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="reveal">
          {/* section-label */}
          <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
            <span className="block bg-rock-gold flex-shrink-0" style={{ width: '40px', height: '1px' }} aria-hidden="true" />
            <span className="font-body uppercase text-rock-gold" style={{ fontSize: '10px', letterSpacing: '5px' }}>
              How We Work
            </span>
          </div>
          {/* section-title */}
          <h2
            id="process-heading"
            className="font-display text-rock-white"
            style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '0.95', letterSpacing: '2px' }}
          >
            FROM BRIEF
            <br />
            <em className="font-serif font-light text-rock-sky" style={{ fontStyle: 'italic', fontSize: '0.85em' }}>
              to road-ready
            </em>
          </h2>
        </div>

        {/* process-steps: grid 5col; gap: 0; margin-top: 80px; position: relative */}
        <div
          className="relative process-grid-responsive"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: '80px' }}
          role="list"
        >
          {/* Connector line: top 28px; left 10%; right 10%; height 1px */}
          <div
            className="absolute hidden lg:block"
            style={{
              top: '28px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.3), rgba(74,144,217,0.3), rgba(200,169,110,0.3), transparent)',
            }}
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, i) => {
            const delayClasses = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

            return (
              <div
                key={step.num}
                className={`flex flex-col items-center text-center reveal ${delayClasses[i]}`}
                style={{ padding: '0 20px' }}
                role="listitem"
                aria-label={`Step ${step.num}: ${step.title}`}
              >
                {/* process-dot: width 56px; height 56px; margin-bottom: 28px */}
                <div
                  className="relative rounded-full border border-[rgba(200,169,110,0.3)] flex items-center justify-center bg-rock-darkgray"
                  style={{ width: '56px', height: '56px', marginBottom: '28px' }}
                  aria-hidden="true"
                >
                  <span className="font-display text-rock-gold" style={{ fontSize: '20px' }}>
                    {step.num}
                  </span>
                </div>
                {/* process-step-title: font-size: 18px; letter-spacing: 2px; margin-bottom: 10px */}
                <h3
                  className="font-display text-rock-white"
                  style={{ fontSize: '18px', letterSpacing: '2px', marginBottom: '10px' }}
                >
                  {step.title}
                </h3>
                {/* process-step-desc: font-size: 12px; line-height: 1.7 */}
                <p className="font-body" style={{ fontSize: '12px', lineHeight: '1.7', color: 'rgba(250,250,248,0.4)' }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
