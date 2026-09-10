import React, { useState } from 'react';
import SectionHeader from './SectionHeader.tsx';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  demoLink: string;
  category: string;
  gradient: string; // CSS gradient class representing the project preview screen
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Intelligence", "Web Architecture", "Systems & IoT"];

  const projectsData: Project[] = [
    {
      title: "Sense-to-Cloud — Real-Time IoT Monitoring with Raspberry Pi & AWS",
      description: "Implemented an end-to-end IoT pipeline connecting Raspberry Pi sensors to AWS cloud services for continuous, real-time data monitoring — directly applying dashboard and alert-based system monitoring.",
      tech: ["IoT", "Raspberry Pi", "AWS Cloud", "Sensors", "MQTT", "Real-Time Telemetry"],
      githubLink: "https://github.com/kamal-420",
      demoLink: "https://github.com/kamal-420",
      category: "Systems & IoT",
      gradient: "from-orange-500/20 via-amber-500/10 to-transparent"
    },
    {
      title: "AI Code Assistant — Error Detection & Diagnostic Tool",
      description: "Built an AI-powered tool using the OpenAI API and Streamlit that detects code errors, explains root causes, and suggests fixes — applying systematic issue investigation and troubleshooting. Designed the frontend interface with HTML and CSS for a clear, user-friendly diagnostic experience.",
      tech: ["Python", "OpenAI API", "Streamlit", "HTML5", "CSS3", "Diagnostics"],
      githubLink: "https://github.com/kamal-420",
      demoLink: "https://github.com/kamal-420",
      category: "AI & Intelligence",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent"
    },
    {
      title: "AI ATS Resume Analyzer — Data Analysis & Compatibility Scoring Tool",
      description: "Developed a Python and Streamlit tool that analyzes documents against a rule set, identifies gaps, and generates accuracy-based scoring and recommendations using NLP and PDF processing.",
      tech: ["Python", "Streamlit", "OpenAI API", "NLP", "PDF Processing"],
      githubLink: "https://github.com/kamal-420",
      demoLink: "https://github.com/kamal-420",
      category: "AI & Intelligence",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
    },
    {
      title: "SmartCompress — Desktop Image & Video Compression Tool",
      description: "Engineered a Python desktop application with multi-threading and live status tracking, monitoring batch job progress and processing statistics in real time using CustomTkinter, FFmpeg, and Pillow.",
      tech: ["Python", "CustomTkinter", "FFmpeg", "Pillow", "Multi-threading"],
      githubLink: "https://github.com/kamal-420",
      demoLink: "https://github.com/kamal-420",
      category: "Systems & IoT",
      gradient: "from-amber-500/20 via-[#D4AF37]/10 to-transparent"
    },
    {
      title: "Portfolio Website",
      description: "Created a highly responsive digital portfolio showcasing projects, skills, certificates, and achievements. Implemented a slate-colored premium design with elegant typography, motion overlays, and interactive forms.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Netlify"],
      githubLink: "https://github.com/kamal-420",
      demoLink: "https://github.com/kamal-420",
      category: "Web Architecture",
      gradient: "from-[#D4AF37]/20 via-[#0B0B0F] to-transparent"
    },
    {
      title: "Responsive Web Development Using Frontend Technologies",
      description: "Developed a responsive, cross-browser compatible web platform using frontend frameworks. Crafted modular, clean UI layouts optimized for performance and mobile responsiveness.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Git & GitHub"],
      githubLink: "https://github.com/kamal-420",
      demoLink: "https://github.com/kamal-420",
      category: "Web Architecture",
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div>
      <SectionHeader title="Featured Projects" />
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-[10px] uppercase tracking-widest font-bold rounded-lg transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-[#D4AF37] text-[#050510] font-black'
                : 'bg-white/5 border border-white/10 text-zinc-400 hover:border-[#D4AF37]/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p, idx) => (
          <div 
            key={idx}
            className="royal-card bg-[#121217] border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/30 hover:translate-y-[-4px]"
          >
            {/* Elegant stylized header acting as the Project Preview Mockup */}
            <div className={`h-40 bg-gradient-to-br ${p.gradient} p-6 relative flex flex-col justify-between border-b border-white/5 overflow-hidden`}>
              <div className="flex justify-between items-center w-full relative z-10">
                {/* Simulated window dots */}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/30"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/30"></span>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-black/40 rounded-md text-zinc-400 border border-white/5">
                  {p.category}
                </span>
              </div>

              {/* Simulated visual layout */}
              <div className="space-y-2 relative z-10">
                <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                <div className="h-3 w-1/2 bg-white/5 rounded"></div>
              </div>

              {/* Subtle visual glow accent */}
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="royal-text text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {p.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed mb-6 italic">
                  "{p.description}"
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-400 text-[9px] font-bold uppercase tracking-wider rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Recruiter-friendly action buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a 
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 border border-white/10 text-center text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-white hover:border-[#D4AF37]/40 rounded-lg bg-white/3 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>GitHub</span>
                  </a>

                  <a 
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center text-[10px] font-black uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/20 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
