'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Cyan Glow Cursor */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '44px' : '20px',
          height: isPointer ? '44px' : '20px',
          transform: 'translate(-50%, -50%)',
          background: isPointer
            ? 'radial-gradient(circle, rgba(56,189,248,0.6) 0%, rgba(139,92,246,0.3) 70%)'
            : 'rgba(56, 189, 248, 0.75)',
          border: '1px solid rgba(56, 189, 248, 0.9)',
          boxShadow: isPointer
            ? '0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(139, 92, 246, 0.5)'
            : '0 0 12px rgba(56, 189, 248, 0.6)',
          backdropFilter: 'blur(2px)'
        }}
      />
      {/* Outer ambient glow follow aura */}
      <div
        className="pointer-events-none fixed z-40 rounded-full transition-transform duration-300 ease-out opacity-40 blur-xl"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '240px',
          height: '240px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(139,92,246,0.15) 50%, transparent 80%)'
        }}
      />
    </>
  );
}
