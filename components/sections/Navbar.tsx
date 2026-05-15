'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change / link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav
        id="nav"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-[background,padding] duration-[400ms]"
        style={{
          padding: scrolled ? '16px 60px' : '26px 60px',
          background: scrolled
            ? 'rgba(10,22,40,0.98)'
            : 'linear-gradient(180deg, rgba(10,22,40,0.95) 0%, transparent 100%)',
        }}
      >
        {/* Logo */}
        <Link href="#home" className="flex flex-col gap-0 no-underline" aria-label="BlueRock home">
          <span className="font-display text-rock-white leading-none" style={{ fontSize: '26px', letterSpacing: '4px' }}>
            BLUEROCK
          </span>
          <span className="font-body uppercase text-rock-gold" style={{ fontSize: '9px', letterSpacing: '6px' }}>
            Tippers &amp; Trailerz
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex list-none" style={{ gap: '48px' }} role="list">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-body uppercase no-underline transition-colors duration-300"
                  style={{ fontSize: '12px', letterSpacing: '3px', color: isActive ? '#fafaf8' : 'rgba(250,250,248,0.7)' }}
                >
                  <span
                    className="absolute left-0 h-px bg-rock-gold transition-all duration-300"
                    style={{ bottom: '-4px', width: isActive ? '100%' : '0' }}
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden lg:inline-block font-body uppercase text-rock-navy bg-rock-gold no-underline transition-all duration-300 hover:bg-rock-white"
          style={{ fontSize: '11px', letterSpacing: '3px', padding: '12px 28px' }}
          aria-label="Get a quote from BlueRock"
        >
          Get Quote
        </Link>

        {/* Mobile: CTA small + hamburger */}
        <div className="flex items-center lg:hidden" style={{ gap: '12px' }}>
          <Link
            href="#contact"
            className="font-body uppercase text-rock-navy bg-rock-gold no-underline"
            style={{ fontSize: '10px', letterSpacing: '2px', padding: '9px 16px' }}
            onClick={closeMenu}
          >
            Quote
          </Link>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex flex-col justify-center items-center"
            style={{ width: '36px', height: '36px', gap: '5px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <span
              className="block bg-rock-white transition-all duration-300"
              style={{ width: '22px', height: '1.5px', transformOrigin: 'center', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
            />
            <span
              className="block bg-rock-white transition-all duration-300"
              style={{ width: '22px', height: '1.5px', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block bg-rock-white transition-all duration-300"
              style={{ width: '22px', height: '1.5px', transformOrigin: 'center', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-[99] flex flex-col justify-center items-center lg:hidden transition-all duration-500"
        style={{
          background: 'rgba(10,22,40,0.98)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          backdropFilter: 'blur(12px)',
        }}
        aria-hidden={!menuOpen}
      >
        <ul className="list-none flex flex-col items-center" style={{ gap: '40px' }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="font-display text-rock-white no-underline uppercase"
                style={{ fontSize: '36px', letterSpacing: '4px' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            href="#contact"
            onClick={closeMenu}
            className="font-body uppercase text-rock-navy bg-rock-gold no-underline"
            style={{ fontSize: '12px', letterSpacing: '3px', padding: '14px 40px' }}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
