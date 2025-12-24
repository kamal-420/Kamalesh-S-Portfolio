import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Education from './components/Education.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Workshops from './components/Workshops.tsx';
import Contact from './components/Contact.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ScrollReveal from './components/ScrollReveal.tsx';
import ScrollProgressBar from './components/ScrollProgressBar.tsx';
import CursorTrail from './components/CursorTrail.tsx';
import PageTransitionOverlay from './components/PageTransitionOverlay.tsx';

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
        
        // Removed history.pushState to avoid SecurityErrors in sandboxed environments
        // Instead, just scrolling is enough for this single-page preview context
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
          <section id="about">
            <ScrollReveal>
              <About />
            </ScrollReveal>
          </section>

          <section id="education">
            <ScrollReveal delay={100}>
              <Education />
            </ScrollReveal>
          </section>

          <section id="skills">
            <ScrollReveal delay={100}>
              <Skills />
            </ScrollReveal>
          </section>

          <section id="projects">
            <ScrollReveal delay={100}>
              <Projects />
            </ScrollReveal>
          </section>

          <section id="workshops">
            <ScrollReveal delay={100}>
              <Workshops />
            </ScrollReveal>
          </section>

          <section id="contact">
            <ScrollReveal delay={100}>
              <Contact />
            </ScrollReveal>
          </section>
        </div>
      </main>
      
      <ScrollToTop onNavigate={handleNavigate} />
    </div>
  );
};

export default App;