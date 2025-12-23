import React, { useState, useEffect } from 'react';
import Particles from './Particles';

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

  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
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

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-0 overflow-hidden">
      <Particles />
      
      {/* Parallax Background Shapes */}
      <div 
        className="absolute top-[15%] left-[10%] w-72 h-72 bg-[#4B0082]/10 dark:bg-[#4B0082]/15 rounded-full blur-[120px] pointer-events-none transition-transform duration-75"
        style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
      ></div>
      <div 
        className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none transition-transform duration-75"
        style={{ transform: `translate3d(0, ${scrollY * -0.2}px, 0)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-center relative z-10 py-20 lg:py-0">
        
        {/* Text Content Column */}
        <div 
          className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start transition-all duration-1000 ease-out"
          style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
        >
          <div className="inline-block relative mb-6">
            <p className="mono text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.4em] uppercase drop-shadow-sm min-h-[1.5em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#D4AF37]/40 hidden lg:block"></span>
              Est. 2003 | <span className="inline-block">{typedText}</span>
              <span className="w-[3px] h-5 bg-[#D4AF37] ml-1 inline-block animate-[blink_1s_infinite] align-middle"></span>
            </p>
          </div>

          <h1 className="royal-text text-6xl md:text-8xl lg:text-[7rem] font-black text-[var(--text-primary)] tracking-tight leading-[0.95] mb-10 drop-shadow-2xl">
            Kamalesh <br />
            <span className="gold-gradient inline-block mt-2">S</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-xl mb-14 leading-relaxed font-light">
            Third-year <span className="text-[#D4AF37] font-semibold border-b border-[#D4AF37]/20">B.Tech Information Technology</span> student 
            <span className="block mt-4 italic text-lg opacity-80 border-l-2 border-[#D4AF37]/30 pl-4 ml-1">
              "Crafting elegant digital ecosystems with a focus on Frontend Mastery and Cloud Intelligence."
            </span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-6 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-48 py-5 bg-[#D4AF37] text-[#0a0a2e] rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_15px_35px_rgba(212,175,55,0.5)] active:scale-95 text-center flex items-center justify-center border-2 border-transparent"
            >
              View Projects
            </button>
            <a
              href="resume.pdf"
              download="Kamalesh_S_Resume.pdf"
              className="w-full sm:w-48 py-5 glass text-[#D4AF37] border-2 border-[#D4AF37]/40 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(212,175,55,0.1)] hover:scale-105 active:scale-95 text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Resume
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-48 sm:col-span-2 lg:col-span-1 py-5 glass text-[var(--text-primary)] border-2 border-[var(--border-color)] rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-[var(--text-primary)]/5 hover:border-[#D4AF37]/50 hover:scale-105 active:scale-95 text-center flex items-center justify-center shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="flex justify-center order-1 lg:order-2">
          <div 
            className="relative group perspective-1000"
            style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 0)` }}
          >
            <div className="absolute inset-[-40px] border border-[#D4AF37]/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#D4AF37] rounded-full blur-[2px]"></div>
            </div>
            <div className="absolute inset-[-20px] bg-[#D4AF37]/5 rounded-full blur-2xl"></div>
            <div className="profile-frame w-72 h-72 md:w-96 md:h-96 relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-[var(--midnight-blue)] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1LJ_XoEmBCYSHXg_v1H4640f874XjW578" 
                  alt="Kamalesh S" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3 grayscale-[20%] group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/royal-kamal/1000/1000";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e]/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-20 group flex flex-col items-center gap-3" 
        onClick={() => onNavigate('about')}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors font-bold">Discover</span>
        <div className="w-6 h-11 border-2 border-[#D4AF37]/40 rounded-full flex justify-center p-1 group-hover:border-[#D4AF37] transition-all">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full animate-scroll"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Hero;