import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Projects: React.FC = () => {
  const project = {
    title: "Responsive Web Development Using Frontend Technologies",
    description: "Built a mobile-friendly, responsive website using HTML, CSS, JavaScript, and Bootstrap. Ensured clean UI, cross-browser support, and optimization for the highest performance standards.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git/GitHub", "React", "VS Code"],
    link: "https://github.com/kamal-420"
  };

  return (
    <div>
      <SectionHeader title="Featured Works" />
      <div className="grid grid-cols-1 gap-12">
        <div className="royal-card group bg-[#0a0a25]/60 border-2 border-[#D4AF37]/20 rounded-[3rem] overflow-hidden hover:border-[#D4AF37] flex flex-col lg:flex-row">
          <div className="lg:w-2/5 relative overflow-hidden bg-[#D4AF37]/5 p-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-[#D4AF37]/30 group-hover:scale-110 group-hover:text-[#D4AF37]/60 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="lg:w-3/5 p-12 md:p-16 flex flex-col">
            <h3 className="royal-text text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-zinc-950 border border-zinc-800 text-[#D4AF37] text-[11px] font-black uppercase tracking-widest rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-white text-zinc-950 font-black rounded-2xl hover:bg-[#D4AF37] transition-all hover:scale-105"
              >
                <span>View My GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;