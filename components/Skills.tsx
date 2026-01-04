import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Skills: React.FC = () => {
  const academicSkills = [
    { category: 'Programming', items: ['Python', 'Java', 'C', 'HTML', 'CSS', 'JS'] },
    { category: 'Web', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Tools & Platform', items: ['Microsoft Excel', 'Word', 'PowerPoint', 'Visual Studio', 'CapCut (Video Editing)'] },
    { category: 'Core Concepts', items: ['Data Structures', 'OOPs Concept', 'DBMS'] },
  ];

  const softSkills = [
    'Communication Skills (oral + written)',
    'Teamwork & Collaboration',
    'Leadership & Initiative',
    'Problem-Solving & Critical Thinking',
    'Time Management & Organization'
  ];

  return (
    <div>
      <SectionHeader title="Expertise & Craft" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Academic Skills */}
        <div className="royal-card p-10 rounded-[2.5rem] bg-zinc-950/40 border-t-2 border-t-[#D4AF37]/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[60px] -mr-16 -mt-16"></div>
          <h3 className="royal-text text-2xl font-bold text-white mb-10 flex items-center gap-4 relative z-10">
            <span className="w-8 h-8 bg-[#D4AF37]/10 flex items-center justify-center rounded-lg text-[#D4AF37]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3z" />
                <path d="M6.75 6.75C6.75 5.784 7.534 5 8.5 5h3c.966 0 1.75.784 1.75 1.75v1.5a.75.75 0 01-1.5 0v-1.5a.25.25 0 00-.25-.25h-3a.25.25 0 00-.25.25v1.5a.75.75 0 01-1.5 0v-1.5z" />
              </svg>
            </span>
            Academic Skills
          </h3>
          <div className="space-y-8 relative z-10">
            {academicSkills.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#D4AF37] mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-zinc-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="royal-card p-10 rounded-[2.5rem] bg-zinc-950/40 border-t-2 border-t-[#D4AF37]/50 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-[80px] -mr-20 -mb-20"></div>
          <h3 className="royal-text text-2xl font-bold text-white mb-10 flex items-center gap-4 relative z-10">
             <span className="w-8 h-8 bg-[#D4AF37]/10 flex items-center justify-center rounded-lg text-[#D4AF37]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 gap-4 relative z-10">
            {softSkills.map((skill) => (
              <div key={skill} className="group flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/40 transition-all">
                <span className="text-zinc-300 font-semibold group-hover:text-white transition-colors">{skill}</span>
                <div className="h-1 w-20 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#D4AF37] to-transparent w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;