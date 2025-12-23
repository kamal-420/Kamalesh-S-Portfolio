import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const About: React.FC = () => {
  return (
    <div className="relative">
      <SectionHeader title="About My Journey" />
      <div className="glass royal-card p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 text-8xl text-[#D4AF37]/5 royal-text select-none group-hover:text-[#D4AF37]/10 transition-colors">
          About
        </div>
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed mb-8 royal-text italic">
            "I am eager to apply my academic knowledge in practical settings and contribute to innovative projects..."
          </p>
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
            <p>
              I am <span className="text-[#D4AF37] font-bold">Kamalesh S</span>, a third-year B.Tech Information Technology student at <span className="text-white font-semibold">SNS College of Technology</span>. With a strong foundation in computer science principles and emerging technologies, I am passionate about exploring areas such as software development, data science, and cloud computing.
            </p>
            <p>
              My goal is to continuously enhance my skills in the ever-evolving tech landscape while building intuitive user experiences and efficient backend systems. I strive for excellence in every digital artifact I forge.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/5">
            <div>
              <p className="text-[#D4AF37] font-black text-3xl mb-1">3rd</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500">Year Student</p>
            </div>
            <div>
              <p className="text-[#D4AF37] font-black text-3xl mb-1">7.0</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500">Current CGPA</p>
            </div>
            <div>
              <p className="text-[#D4AF37] font-black text-3xl mb-1">5+</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500">Tech Stack</p>
            </div>
            <div>
              <p className="text-[#D4AF37] font-black text-3xl mb-1">2+</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500">Workshops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;