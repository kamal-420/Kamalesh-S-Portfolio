import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Workshops: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Development Internship",
      description: "Successfully completed a 21-day internship program, receiving industry-standard training in Frontend Development. Gained practical exposure and demonstrated active participation in key concepts and tools relevant to modern web development.",
      meta: "dsignz media",
      link: "https://drive.google.com/file/d/1cAcfFkcZEDErovRSGqaF7gZihR9znMdx/view?usp=drivesdk"
    },
    {
      title: "Backend Development Industrial Training",
      description: "Gained practical knowledge relevant to modern application development within a professional software development environment at LET'S GAMETECH.",
      meta: "LET'S GAMETECH",
      link: "#"
    },
    {
      title: "Workshop on AR/VR",
      description: "Gained hands-on experience in AR/VR fundamentals, 3D interaction, and immersive content creation with real-world applications.",
      meta: "SNSCT",
      link: "https://drive.google.com/file/d/1E5uJSWqMf1pbj_rXTEb-gOk2fs_ZBS1s/view?usp=drivesdk"
    },
    {
      title: "Sense-to-Cloud (IoT with Raspberry Pi & AWS)",
      description: "Built end-to-end IoT solutions using Raspberry Pi and AWS, covering sensor integration, cloud connectivity, and real-time monitoring.",
      meta: "AWS & SNSCT",
      link: "https://drive.google.com/file/d/13I8fVWdcLxogzLbru15BhEioZtgWCm0R/view?usp=drivesdk"
    }
  ];

  return (
    <div>
      <SectionHeader title="Technical Forge" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((exp, index) => (
          <div key={index} className="royal-card p-12 rounded-[2.5rem] bg-gradient-to-br from-[#121235] to-[#050510] border border-white/5 group hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">{exp.meta}</p>
              {exp.link !== "#" && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#D4AF37] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>
            <h3 className="royal-text text-2xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform">
              {exp.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed italic border-l border-white/10 pl-4 py-2 group-hover:text-zinc-300 transition-colors">
              "{exp.description}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;