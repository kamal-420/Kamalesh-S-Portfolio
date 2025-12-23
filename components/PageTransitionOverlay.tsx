import React from 'react';

interface PageTransitionOverlayProps {
  isTransitioning: boolean;
}

const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({ isTransitioning }) => {
  return (
    <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-300 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
      {/* Three staggered panels for the sweep effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isTransitioning ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionDelay: '0ms' }}
      />
      <div 
        className={`absolute inset-0 bg-[#0a0a2e] transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isTransitioning ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionDelay: '100ms' }}
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#1e0b36] to-[#0a0a2e] transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] flex items-center justify-center ${
          isTransitioning ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className={`transition-all duration-500 delay-500 ${isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
           <span className="royal-text text-4xl font-bold tracking-[0.5em] text-[#D4AF37]">KAMALESH</span>
        </div>
      </div>
    </div>
  );
};

export default PageTransitionOverlay;