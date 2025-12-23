import React, { useState, useEffect } from 'react';
import Particles from './Particles.tsx';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const roles = [
    "Digital Architect",
    "Frontend Developer",
    "Cloud Enthusiast",
    "Creative Problem Solver"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2500;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleResumeDownload = () => {
    const resumeUrl = 'https://github.com/kamal-420';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Kamalesh_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 lg:py-0">
      <Particles />
      
      {/* Dynamic Background Ambiance */}
      <div 
        className="absolute top-1/4 left-[5%] w-[45vw] h-[45vw] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-[5%] w-[35vw] h-[35vw] bg-[#4B0082]/10 rounded-full blur-[120px] pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Text Content Column */}
        <div 
          className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start transition-all duration-700"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
            <p className="text-[#D4AF37] font-bold tracking-[0.7em] uppercase text-[10px]">
              Master of Forge
            </p>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
          </div>
          
          <h1 className="royal-text text-7xl md:text-8xl lg:text-[9.5rem] font-black leading-[0.85] mb-10 relative">
            KAMALESH<br />
            <span className="text-[#D4AF37] relative inline-block">
              .S
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-[#D4AF37]/20 blur-xl"></span>
            </span>
          </h1>

          <div className="h-12 flex items-center mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-zinc-400 font-medium tracking-tight">
              Crafting <span className="text-[var(--text-primary)] border-r-2 border-[#D4AF37] pr-3 animate-pulse font-bold">{typedText}</span>
            </p>
          </div>
          
          {/* Uniform Action Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:max-w-4xl">
            <button 
              onClick={() => onNavigate('projects')}
              className="group relative h-[68px] bg-[#D4AF37] text-[#050510] text-[11px] font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-[#c4a030] transition-all shadow-[0_20px_50px_-15px_rgba(212,175,55,0.4)] active:scale-95 overflow-hidden flex items-center justify-center w-full"
            >
              <span className="relative z-10">Explore</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button 
              onClick={handleResumeDownload}
              className="group flex items-center justify-center gap-2 h-[68px] border-2 border-[#D4AF37]/40 text-[var(--text-primary)] text-[11px] font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all active:scale-95 glass w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37] group-hover:translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Resume</span>
            </button>

            <button 
              onClick={() => onNavigate('contact')}
              className="h-[68px] border border-white/10 text-[var(--text-primary)] text-[11px] font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-white/5 hover:border-[#D4AF37]/40 transition-all active:scale-95 glass flex items-center justify-center w-full"
            >
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Profile Image Column */}
        <div 
          className="flex justify-center order-1 lg:order-2"
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        >
          <div className="relative group scale-95 lg:scale-125">
            <div className="absolute inset-[-30px] border border-[#D4AF37]/5 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none"></div>
            <div className="absolute inset-[-15px] border border-[#D4AF37]/15 rounded-full animate-[spin_20s_linear_infinite_reverse] pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.2)] animate-pulse"></div>

            <div className="w-80 h-80 md:w-96 md:h-96 relative z-10 p-4 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#D4AF37]/30">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#D4AF37]/60 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-transform duration-1000 group-hover:scale-[1.04] bg-[#050510]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1LJ_XoEmBCYSHXg_v1H4640f874XjW578" 
                  alt="Kamalesh S" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/royal-kamal/1000/1000";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/30 to-transparent opacity-60"></div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#050510] border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shadow-2xl animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group flex flex-col items-center gap-3 transition-opacity duration-500" 
        style={{ opacity: scrollY > 100 ? 0 : 1 }}
        onClick={() => onNavigate('about')}
      >
        <span className="text-[9px] uppercase tracking-[0.7em] text-zinc-500 font-bold group-hover:text-[#D4AF37] transition-colors">Royal Descent</span>
        <div className="w-6 h-10 border border-[#D4AF37]/20 rounded-full flex justify-center p-2 glass">
          <div className="w-1.5 h-2.5 bg-[#D4AF37] rounded-full animate-scroll-minimal shadow-[0_0_10px_#D4AF37]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-minimal {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(18px); opacity: 0; }
        }
        .animate-scroll-minimal {
          animation: scroll-minimal 2.5s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;