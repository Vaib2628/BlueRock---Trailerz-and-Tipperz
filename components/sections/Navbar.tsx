'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  return (
    <header>
      <nav
        id="nav"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-[background,padding] duration-[400ms]"
        style={{
          padding: scrolled ? '18px 60px' : '28px 60px',
          background: scrolled
            ? 'rgba(10,22,40,0.98)'
            : 'linear-gradient(180deg, rgba(10,22,40,0.95) 0%, transparent 100%)',
        }}
      >
        {/* Logo */}
        <Link href="#home" className="flex flex-col gap-0 no-underline" aria-label="BlueRock home">
          <span
            className="font-display text-rock-white leading-none"
            style={{ fontSize: '26px', letterSpacing: '4px' }}
          >
            BLUEROCK
          </span>
          <span
            className="font-body uppercase text-rock-gold"
            style={{ fontSize: '9px', letterSpacing: '6px' }}
          >
            Tippers &amp; Trailerz
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <ul
          className="hidden lg:flex list-none"
          style={{ gap: '48px' }}
          role="list"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative font-body uppercase no-underline transition-colors duration-300"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '3px',
                    color: isActive ? 'rgba(250,250,248,1)' : 'rgba(250,250,248,0.7)',
                  }}
                >
                  <span
                    className="absolute left-0 h-px bg-rock-gold transition-all duration-300"
                    style={{
                      bottom: '-4px',
                      width: isActive ? '100%' : '0',
                    }}
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="font-body uppercase text-rock-navy bg-rock-gold no-underline transition-all duration-300 hover:bg-rock-white"
          style={{ fontSize: '11px', letterSpacing: '3px', padding: '12px 28px' }}
          aria-label="Get a quote from BlueRock"
        >
          Get Quote
        </Link>
      </nav>
    </header>
  );
}
