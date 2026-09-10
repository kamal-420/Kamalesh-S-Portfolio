
import React, { useState, useEffect } from 'react';

const CursorTrail: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Primary Glow */}
      <div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-[#D4AF37]/50 mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
      />
      {/* Soft Aura Trail */}
      <div
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-[9998] rounded-full bg-[#D4AF37]/5 blur-[80px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${position.x - 128}px, ${position.y - 128}px, 0)`,
        }}
      />
      {/* Tiny Core Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[10000] rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] transition-transform duration-0"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
    </>
  );
};

export default CursorTrail;
