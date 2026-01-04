import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Diploma in CSE",
      institution: "Muthayammal Polytechnic College",
      location: "Namakkal, Tamil Nadu, India",
      period: "2019 - 2022",
      cgpa: "84 %",
      description: "Department of CSE. Built a strong foundation in computer science principles and technical systems."
    },
    {
      degree: "B.Tech Information Technology",
      institution: "SNS College of Technology",
      location: "Coimbatore, Tamil Nadu, India",
      period: "2022 - 2026",
      cgpa: "7.0 %",
      description: "Engaged in an intensive curriculum focusing on software engineering, data science, and cloud computing."
    }
  ];

  return (
    <div>
      <SectionHeader title="Academic Pedigree" />
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="royal-card bg-gradient-to-br from-[#1a1a3a] to-[#0a0a20] p-10 rounded-[2.5rem] border-l-4 border-l-[#D4AF37] relative group overflow-hidden transition-all duration-500 hover:translate-x-2">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-all"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h3 className="royal-text text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-[#D4AF37] font-bold text-lg tracking-widest uppercase">{edu.institution}</p>
              </div>
              <div className="px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] font-bold mono">
                CGPA: {edu.cgpa}
              </div>
            </div>
            <div className="flex items-center gap-4 text-zinc-400 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{edu.location}</span>
              </div>
              <span className="hidden md:inline mx-2 text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{edu.period}</span>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg italic">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;