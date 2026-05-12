import Link from 'next/link';

interface SectionLabelProps {
  text: string;
}

/** Reusable section eyebrow label: gap 16px, line 40px, font 10px/5px tracking */
export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center" style={{ gap: '16px', marginBottom: '24px' }}>
      <span
        className="block bg-rock-gold flex-shrink-0"
        style={{ width: '40px', height: '1px' }}
        aria-hidden="true"
      />
      <span
        className="font-body uppercase text-rock-gold"
        style={{ fontSize: '10px', letterSpacing: '5px' }}
      >
        {text}
      </span>
    </div>
  );
}

interface BtnPrimaryProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * btn-primary: padding 18px 40px; font 11px; letter-spacing 3px;
 * color: rock-navy; bg: rock-gold; overflow hidden slide animation
 */
export function BtnPrimary({ href, children, style }: BtnPrimaryProps) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center gap-3 font-body uppercase text-rock-navy bg-rock-gold no-underline overflow-hidden transition-all duration-300 group"
      style={{ fontSize: '11px', letterSpacing: '3px', padding: '18px 40px', ...style }}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <span
        className="absolute inset-0 bg-rock-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

interface BtnGhostProps {
  href: string;
  children: React.ReactNode;
}

/**
 * btn-ghost: font 11px; letter-spacing 3px; color white/70; arrow 36px → 56px on hover
 */
export function BtnGhost({ href, children }: BtnGhostProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center font-body uppercase text-white/70 no-underline transition-colors duration-300 hover:text-rock-white group"
      style={{ gap: '12px', fontSize: '11px', letterSpacing: '3px' }}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {/* btn-ghost-arrow: width 36px → 56px; height 1px; arrow head */}
      <span
        className="relative bg-current transition-all duration-300 group-hover:w-14"
        style={{ display: 'block', width: '36px', height: '1px' }}
      >
        <span
          className="absolute right-0 border-t border-r border-current rotate-45"
          style={{ top: '-3px', width: '6px', height: '6px' }}
          aria-hidden="true"
        />
      </span>
      {children}
    </Link>
  );
}

export function ArrowSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#c8a96e" strokeWidth="1.2" />
    </svg>
  );
}
