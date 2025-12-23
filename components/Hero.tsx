
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
        {/* Fix: Corrected syntax error by properly closing the div tag and adding missing hero text content */}
        <div 
          className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start transition-all duration-1000 ease-out"
          style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
        >
          <p className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            The Portfolio Of
          </p>
          <h1 className="royal-text text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
            KAMALESH<br />
            <span className="text-[#D4AF37]">.S</span>
          </h1>
          <div className="h-12 flex items-center">
            <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-wide">
              I am a <span className="text-white border-r-2 border-[#D4AF37] pr-1 animate-pulse">{typedText}</span>
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-10 py-5 bg-[#D4AF37] text-[#0a0a2e] font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
            >
              The Archives
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 border-2 border-[#D4AF37]/40 text-[#D4AF37] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
            >
              Contact
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
