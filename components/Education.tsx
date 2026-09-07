import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "SNS College of Technology",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 - 2027",
      cgpa: "7.52",
      description: "Focused on Software Engineering, Data Structures & Algorithms, Database Management Systems, and Cloud Architectures. Active participant in technical symposiums, hackathons, and hands-on workshops."
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Muthayammal Polytechnic College",
      location: "Namakkal, Tamil Nadu",
      period: "2021 - 2024",
      cgpa: "84%",
      description: "Acquired rigorous fundamentals in structured programming, Object-Oriented paradigms (C++, Java), basic networking, and relational database systems."
    }
  ];

  return (
    <div>
      <SectionHeader title="Academic Foundation" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="royal-card bg-[#121217] p-8 md:p-10 rounded-3xl border border-white/5 relative group transition-all duration-300 hover:border-[#D4AF37]/40 hover:translate-y-[-2px] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="royal-text text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold text-xs uppercase tracking-wider mt-1.5">{edu.institution}</p>
                </div>
                <div className="px-3.5 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-[10px] font-black tracking-wider uppercase">
                  CGPA: {edu.cgpa}
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                "{edu.description}"
              </p>
            </div>

            <div className="flex items-center gap-4 text-zinc-500 text-[11px] font-bold uppercase tracking-wider mt-auto pt-6 border-t border-white/5">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                {edu.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;