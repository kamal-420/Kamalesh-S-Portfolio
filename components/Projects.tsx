import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Projects: React.FC = () => {
  const project = {
    title: "Responsive Web Development Using Frontend Technologies",
    description: "Developed a responsive, user-friendly website with HTML, CSS, JavaScript, and Bootstrap, ensuring clean UI, cross-browser compatibility, and mobile optimization.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git & GitHub", "React", "VS Code"],
    link: "https://github.com/kamal-420"
  };

  return (
    <div>
      <SectionHeader title="Featured Works" />
      <div className="grid grid-cols-1 gap-12">
        <div className="royal-card group glass bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[3rem] overflow-hidden hover:border-[#D4AF37] flex flex-col lg:flex-row transition-all duration-700 shadow-2xl">
          {/* Visual Side */}
          <div className="lg:w-2/5 relative overflow-hidden bg-[var(--bg-primary)] flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
            <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-[60px] group-hover:bg-[#D4AF37]/20 transition-all duration-700"></div>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-32 h-32 text-[var(--text-secondary)] opacity-20 group-hover:scale-110 group-hover:text-[#D4AF37] group-hover:opacity-60 transition-all duration-700 z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>

          {/* Content Side */}
          <div className="lg:w-3/5 p-10 md:p-16 flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37]">Web Architecture</span>
            </div>
            
            <h3 className="royal-text text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight">
              {project.title}
            </h3>
            
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#D4AF37] hover:border-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-[#D4AF37] hover:text-[#050510] transition-all hover:scale-105 shadow-xl"
              >
                <span>View Source Code</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;