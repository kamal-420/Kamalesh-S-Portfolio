import React, { useState, useEffect } from 'react';
import { DEFAULT_PHOTO } from '../src/photoData.ts';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Copied to Clipboard!');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("kamaleshsekar9487@gmail.com");
    setToastMessage('Email Copied to Clipboard!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-24 lg:py-16 bg-[#0B0B0F]">
      
      {/* Absolute background accent - minimalist and extremely subtle */}
      <div 
        className="absolute top-1/4 left-[10%] w-[35vw] h-[35vw] bg-[#D4AF37]/2 rounded-full blur-[150px] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Professional Summary & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
          
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
            <p className="text-[#D4AF37] font-bold tracking-[0.25em] uppercase text-[9px]">
              PORTFOLIO ARCHIVE
            </p>
          </div>
          
          <p className="text-zinc-500 text-base font-medium tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-none text-white tracking-tight">
            Kamalesh <span className="text-[#D4AF37]">S</span>
          </h1>

          <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-300 pb-2 border-b border-white/5 w-full">
            Control Room Specialist &amp; IT Systems Support <span className="text-[#D4AF37]">|</span> Systems Monitoring &amp; Cloud
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
            B.Tech Information Technology graduate with hands-on experience in systems monitoring, troubleshooting, and cloud-based real-time data tracking, backed by verified training in Cloud Computing, Microsoft Azure Fundamentals, and Computer Systems Security.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-1">
            <a 
              href="https://www.linkedin.com/in/kamalesh-sekar-56aa60330" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="https://github.com/kamal-420" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="mailto:kamaleshsekar9487@gmail.com" 
              aria-label="Send Email"
              title="Send Email"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all flex items-center justify-center cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
            <button 
              onClick={() => onNavigate('projects')}
              className="h-11 px-6 bg-[#D4AF37] text-[#050510] text-xs font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-[#bfa032] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <a 
              href="/Kamalesh_S_Resume.pdf"
              download="Kamalesh_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-6 border border-white/15 text-white text-xs font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-white/5 hover:border-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 bg-white/3 w-full sm:w-auto cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download Resume</span>
            </a>

            <button 
              onClick={() => onNavigate('contact')}
              className="h-11 px-6 border border-white/15 text-white text-xs font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-white/5 hover:border-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 bg-white/3 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Right Side: Clean, Professional Portfolio Profile Photo Section */}
        {/* 3:4 portrait aspect ratio, showing only the person standing confidently in black suit with white shirt */}
        {/* No upload buttons, no icons, no instructions, no borders, no cards, no UI elements */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={DEFAULT_PHOTO} 
              alt="Kamalesh S - Systems Support & Software Engineer" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div 
        className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity" 
        onClick={() => onNavigate('about')}
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Scroll Down</span>
        <div className="w-4 h-7 border border-zinc-700 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-1.5 bg-[#D4AF37] rounded-full animate-scroll-minimal"></div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#121217] border border-[#D4AF37]/30 text-white px-4 py-3 rounded-xl shadow-2xl animate-toast backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">{toastMessage}</span>
        </div>
      )}

      <style>{`
        @keyframes scroll-minimal {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in-toast {
          0% {
            transform: translateY(1rem);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-toast {
          animation: slide-in-toast 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scroll-minimal {
          animation: scroll-minimal 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
