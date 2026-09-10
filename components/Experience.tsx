import React from 'react';
import SectionHeader from './SectionHeader.tsx';

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: TimelineItem[] = [
    {
      role: "Backend Development Intern",
      company: "LET'S GAMETECH",
      period: "Dec 2025 (30 Days)",
      location: "Coimbatore, Tamil Nadu",
      description: "Trained in Node.js, MongoDB, and DBMS-based backend development through a 30-day industrial internship, applying concepts to real-world application logic and troubleshooting.",
      technologies: ["Node.js", "Express", "MongoDB", "SQL", "DBMS", "Troubleshooting"]
    },
    {
      role: "Frontend Development Intern",
      company: "dsignz media",
      period: "Jun - Jul 2025 (21 Days)",
      location: "Coimbatore, Tamil Nadu",
      description: "Completed a 21-day industry training program in Frontend Development, applying HTML, CSS, and JavaScript in hands-on UI exercises requiring close attention to detail.",
      technologies: ["HTML5", "CSS3", "JavaScript", "UI Optimization", "Responsive Design"]
    }
  ];

  const keyAchievements = [
    {
      title: "2nd Place in Skillathon '26",
      organization: "Sri Ramakrishna College of Arts & Science, Coimbatore",
      description: "Secured runner-up honors in a multi-stage software and interface development contest, evaluated by top industry architects."
    },
    {
      title: "Adobe India Hackathon & MOSIP Decode 2025",
      organization: "IIIT Bangalore / Unstop",
      description: "Participated and created digital product architectures, resolving core identity security and verification flow logic. Also competed in Odoo x SNS Hiring Hackathon '26."
    }
  ];

  return (
    <div>
      <SectionHeader title="Professional Experience" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
        {/* Left: Internships Timeline */}
        <div className="lg:col-span-7 space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-[1px] before:bg-zinc-800">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-10 group">
              {/* Timeline Dot */}
              <div className="absolute left-1.5 top-2 w-4 h-4 rounded-full bg-[#121217] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors duration-300 z-10"></div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-zinc-400 text-sm font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase block bg-[#D4AF37]/10 px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                      {exp.period}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-medium block mt-1">{exp.location}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed italic">
                  "{exp.description}"
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 text-zinc-400 text-[9px] font-bold uppercase tracking-wider rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Key Achievements */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="royal-text text-xl font-bold text-white border-b border-white/5 pb-3">
            Notable Achievements
          </h3>

          <div className="space-y-4">
            {keyAchievements.map((ach, idx) => (
              <div key={idx} className="royal-card p-6 rounded-2xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300">
                <span className="text-[9px] font-black text-[#D4AF37] tracking-wider uppercase block mb-1">
                  National Honors
                </span>
                <h4 className="text-white font-bold text-sm mb-1">{ach.title}</h4>
                <p className="text-zinc-500 text-xs font-semibold mb-3">{ach.organization}</p>
                <p className="text-zinc-400 text-xs leading-relaxed italic">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
