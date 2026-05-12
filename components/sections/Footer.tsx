import Link from 'next/link';
import { FOOTER_COPYRIGHT, FOOTER_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    /* footer: padding: 60px; border-top: 1px solid rgba(200,169,110,0.1); flex; space-between; align-items center */
    <footer
      className="flex items-center justify-between footer-responsive"
      style={{
        background: '#04090f',
        padding: '60px',
        borderTop: '1px solid rgba(200,169,110,0.1)',
      }}
    >
      {/* footer-logo */}
      <div aria-label="BlueRock Tippers & Trailerz — established 1984">
        {/* footer-logo-main: font-size: 32px; letter-spacing: 4px */}
        <div className="font-display text-rock-white" style={{ fontSize: '32px', letterSpacing: '4px' }}>
          BLUEROCK
        </div>
        {/* footer-logo-sub: font-size: 9px; letter-spacing: 5px */}
        <div className="font-body uppercase text-rock-gold" style={{ fontSize: '9px', letterSpacing: '5px' }}>
          Tippers &amp; Trailerz · Est. 1984
        </div>
      </div>

      {/* footer-copy: font-size: 11px; letter-spacing: 1px */}
      <span className="font-body text-white/25" style={{ fontSize: '11px', letterSpacing: '1px' }}>
        {FOOTER_COPYRIGHT}
      </span>

      {/* footer-links: flex; gap: 32px; list-style: none */}
      <nav aria-label="Footer navigation">
        <ul className="flex list-none footer-links-responsive" style={{ gap: '32px' }}>
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body uppercase no-underline transition-colors duration-300 hover:text-rock-gold"
                style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(250,250,248,0.35)' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
