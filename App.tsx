import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Workshops from './components/Workshops';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorTrail from './components/CursorTrail';
import PageTransitionOverlay from './components/PageTransitionOverlay';

const App: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = useCallback((id: string) => {
    setIsTransitioning(true);
    
    // Time the scroll to happen when the overlay is fully visible
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = id === 'hero' ? 0 : elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto' // Instant scroll behind the curtain
        });
        window.history.pushState(null, '', `#${id}`);
      } else if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 600);

    // End the transition animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#D4AF37]/40 relative bg-transparent">
      <PageTransitionOverlay isTransitioning={isTransitioning} />
      <ScrollProgressBar />
      <CursorTrail />
      <Navbar onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero onNavigate={handleNavigate} />
        </section>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-64 pb-32">
          <section id="about" className="scroll-mt-32">
            <ScrollReveal>
              <About />
            </ScrollReveal>
          </section>
          
          <section id="education" className="scroll-mt-32">
            <ScrollReveal>
              <Education />
            </ScrollReveal>
          </section>
          
          <section id="skills" className="scroll-mt-32">
            <ScrollReveal>
              <Skills />
            </ScrollReveal>
          </section>
          
          <section id="projects" className="scroll-mt-32">
            <ScrollReveal>
              <Projects />
            </ScrollReveal>
          </section>
          
          <section id="workshops" className="scroll-mt-32">
            <ScrollReveal>
              <Workshops />
            </ScrollReveal>
          </section>
          
          <section id="contact" className="scroll-mt-32">
            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </section>
        </div>
      </main>
      
      <footer className="py-20 border-t border-white/5 bg-black/40 text-center relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="royal-text text-3xl font-bold mb-8 text-[var(--text-primary)]">
            KAMALESH<span className="text-[#D4AF37]">.S</span>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.4em] mb-4">
            Forged in Code • 2025
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37]/30 mx-auto mb-8"></div>
          <p className="text-zinc-600 text-[10px] tracking-widest">
            ALL RIGHTS RESERVED © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
      
      <ScrollToTop onNavigate={handleNavigate} />
      
      {/* Background Section-to-Section Transition Beams */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-screen bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-[pulse_8s_infinite]" />
        <div className="absolute top-0 left-2/4 w-[1px] h-screen bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-[pulse_12s_infinite]" />
        <div className="absolute top-0 left-3/4 w-[1px] h-screen bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-[pulse_10s_infinite]" />
      </div>
    </div>
  );
};

export default App;