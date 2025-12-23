import React, { useState, useEffect } from 'react';

interface ScrollToTopProps {
  onNavigate: (id: string) => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const sections = [
    { id: 'contact', name: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'workshops', name: 'Workshops', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: 'projects', name: 'Projects', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { id: 'skills', name: 'Skills', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { id: 'education', name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' },
    { id: 'about', name: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  const handleAction = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[70] flex flex-col items-end gap-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className={`flex flex-col items-end gap-3 mb-2 transition-all duration-500 origin-bottom ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleAction(section.id)}
            style={{ transitionDelay: `${index * 50}ms` }}
            className="group flex items-center gap-3"
            aria-label={`Go to ${section.name}`}
          >
            <span className="bg-[#0a0a2e] dark:bg-zinc-800 text-[#D4AF37] px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-xl border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-all">
              {section.name}
            </span>
            <div className="w-11 h-11 rounded-full bg-[var(--card-bg)] backdrop-blur-md border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a0a2e] transition-all shadow-lg hover:scale-110 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={section.icon}></path>
              </svg>
            </div>
          </button>
        ))}
        
        <button
          onClick={() => handleAction('hero')}
          className="group flex items-center gap-3"
          aria-label="Scroll to top"
        >
          <span className="bg-[#0a0a2e] dark:bg-zinc-800 text-[#D4AF37] px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-xl border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-all">
            Ascend
          </span>
          <div className="w-11 h-11 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0a0a2e] transition-all shadow-lg hover:scale-110 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </div>
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] ${
          isOpen ? 'bg-[#0a0a2e] dark:bg-zinc-800 text-[#D4AF37] rotate-90' : 'bg-[#D4AF37] text-[#0a0a2e]'
        }`}
        aria-label="Toggle Quick Navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12"></path>
          ) : (
            <>
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </>
          )}
        </svg>
        {!isOpen && (
          <div className="absolute inset-0 rounded-2xl bg-[#D4AF37] animate-ping opacity-20 pointer-events-none"></div>
        )}
      </button>
    </div>
  );
};

export default ScrollToTop;