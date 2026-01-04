import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const About: React.FC = () => {
  return (
    <div className="relative">
      <SectionHeader title="About My Journey" />
      <div className="glass royal-card p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/40">
        
        {/* Animated Background Shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
          <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-[#D4AF37]/5 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] ease-in-out"></div>
        </div>

        {/* Floating Decorative Initial */}
        <div className="absolute top-0 right-0 p-8 text-8xl md:text-9xl text-[#D4AF37]/5 royal-text select-none group-hover:text-[#D4AF37]/10 group-hover:-translate-y-2 transition-all duration-1000 pointer-events-none">
          Legacy
        </div>

        <div className="max-w-4xl relative z-10">
          <div className="space-y-8 text-xl md:text-2xl text-zinc-200 leading-relaxed mb-8 royal-text italic group-hover:text-white transition-colors duration-500">
            <p>
              I am <span className="text-[#D4AF37] font-bold not-italic">Kamalesh S</span>, a third-year B.Tech Information Technology student at <span className="text-white font-semibold not-italic">SNS College of Technology</span>. With a strong foundation in computer science principles and emerging technologies, I am passionate about exploring areas such as <span className="text-[#D4AF37] not-italic">software development</span>, <span className="text-white not-italic">data science</span>, and <span className="text-white not-italic">cloud computing</span>.
            </p>
            <p className="text-zinc-400 text-lg md:text-xl border-l-2 border-[#D4AF37]/30 pl-6 not-italic">
              "I am eager to apply my academic knowledge in practical settings, contribute to innovative projects, and continuously enhance my skills in the ever-evolving tech landscape.."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/5 group-hover:border-[#D4AF37]/20 transition-colors duration-700">
            <div className="group/stat">
              <p className="text-[#D4AF37] font-black text-3xl mb-1 group-hover/stat:scale-110 transition-transform origin-left">3rd</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500 font-semibold group-hover/stat:text-[#D4AF37]/70 transition-colors">Year IT</p>
            </div>
            <div className="group/stat">
              <p className="text-[#D4AF37] font-black text-3xl mb-1 group-hover/stat:scale-110 transition-transform origin-left">7.0</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500 font-semibold group-hover/stat:text-[#D4AF37]/70 transition-colors">CGPA (%)</p>
            </div>
            <div className="group/stat">
              <p className="text-[#D4AF37] font-black text-3xl mb-1 group-hover/stat:scale-110 transition-transform origin-left">10+</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500 font-semibold group-hover/stat:text-[#D4AF37]/70 transition-colors">Core Skills</p>
            </div>
            <div className="group/stat">
              <p className="text-[#D4AF37] font-black text-3xl mb-1 group-hover/stat:scale-110 transition-transform origin-left">8</p>
              <p className="text-xs uppercase tracking-tighter text-zinc-500 font-semibold group-hover/stat:text-[#D4AF37]/70 transition-colors">Honors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;