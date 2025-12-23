import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Education: React.FC = () => {
  return (
    <div>
      <SectionHeader title="Academic Pedigree" />
      <div className="royal-card bg-gradient-to-br from-[#1a1a3a] to-[#0a0a20] p-10 rounded-[2rem] border-l-4 border-l-[#D4AF37] relative group overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-all"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="royal-text text-3xl font-bold text-white mb-2">B.Tech Information Technology</h3>
            <p className="text-[#D4AF37] font-bold text-lg tracking-widest uppercase">SNS College of Technology</p>
          </div>
          <div className="px-6 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] font-bold mono">
            CGPA: 7.0
          </div>
        </div>
        <div className="flex items-center gap-4 text-zinc-400 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Coimbatore, Tamil Nadu, India</span>
          <span className="mx-2">•</span>
          <span>2022 - 2026</span>
        </div>
        <p className="text-zinc-400 leading-relaxed text-lg italic">
          Engaged in an intensive curriculum focusing on high-performance computing, cloud architecture, and intuitive user experiences.
        </p>
      </div>
    </div>
  );
};

export default Education;