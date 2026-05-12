'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + 'px';
      cursor.style.top = my - 6 + 'px';
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + 'px';
      ring.style.top = ry - 18 + 'px';
      animId = requestAnimationFrame(animRing);
    };
    animId = requestAnimationFrame(animRing);

    const onEnter = () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform = 'scale(1.5)';
      ring.style.opacity = '0.3';
    };
    const onLeave = () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'scale(1)';
      ring.style.opacity = '0.6';
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, .product-card').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    document.addEventListener('mousemove', onMove);
    attachListeners();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed w-3 h-3 bg-rock-gold rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-in-out"
        style={{ mixBlendMode: 'difference' }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        id="cursorRing"
        className="fixed w-9 h-9 border border-rock-gold rounded-full pointer-events-none z-[9998] opacity-60"
        style={{ transition: 'all 0.25s ease' }}
        aria-hidden="true"
      />
    </>
  );
}
