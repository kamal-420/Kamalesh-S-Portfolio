
import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { 
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px' 
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headerRef} className="mb-20 relative">
      {/* Background Stylized Initial Letter */}
      <div 
        className={`absolute -left-8 -top-6 text-8xl text-[#D4AF37]/5 royal-text select-none transition-all duration-[1500ms] ease-out pointer-events-none ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'
        }`}
      >
        {title.charAt(0)}
      </div>

      <div className="relative z-10">
        <h2 
          className={`royal-text text-4xl md:text-6xl font-black tracking-tight text-[var(--text-primary)] inline-block transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {title}
        </h2>
        
        {/* Animated Underline with Gradient Reveal */}
        <div className="relative h-1.5 mt-5 overflow-hidden rounded-full w-32">
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-transparent transition-all duration-[1200ms] delay-500 ease-out ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
          />
        </div>
        
        {/* Decorative Dot */}
        <div 
          className={`w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-3 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
