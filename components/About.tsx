import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const About: React.FC = () => {
  return (
    <div className="relative">
      <SectionHeader title="About My Journey" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
        
        {/* Left Column: Narrative, Objective */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
            <p>
              I am <span className="text-[#D4AF37] font-semibold">Kamalesh S</span>, an ambitious B.Tech Information Technology student at <span className="text-white font-medium">SNS College of Technology</span>, Coimbatore. I specialize in building high-performance frontend interfaces, scalable code logic, and robust software solutions.
            </p>
            <p>
              My expertise is grounded in modern programming paradigms including <span className="text-[#D4AF37] font-medium">Python, Java, and Full-Stack Web Technologies</span>, backed by rigorous specialized industry training and cloud certifications. I love turning complex logic into polished, simple, and recruiter-focused user experiences.
            </p>
          </div>

          <div className="border-l-2 border-[#D4AF37]/40 pl-6 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Career Objective</h4>
            <p className="text-zinc-400 text-sm leading-relaxed italic">
              "Seeking a Graduate Trainee, Software Engineer, or Data Analyst role at a forward-thinking product-based company where I can apply my engineering discipline, core analytical skills, and hands-on full-stack competence to solve high-impact problems."
            </p>
          </div>
        </div>

        {/* Right Column: Key Details & Stats in Premium Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="royal-card p-6 rounded-2xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">Education</span>
            <span className="text-white font-bold text-sm block">B.Tech IT</span>
            <span className="text-[#D4AF37] font-semibold text-xs block mt-1">SNS College of Tech</span>
          </div>

          <div className="royal-card p-6 rounded-2xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">Academic Grade</span>
            <span className="text-white font-bold text-lg block">7.3 CGPA</span>
            <span className="text-zinc-400 text-xs block mt-1">Information Technology</span>
          </div>

          <div className="royal-card p-6 rounded-2xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">Diploma Grade</span>
            <span className="text-white font-bold text-lg block">84% GPA</span>
            <span className="text-zinc-400 text-xs block mt-1">Computer Science Eng</span>
          </div>

          <div className="royal-card p-6 rounded-2xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">Location</span>
            <span className="text-white font-bold text-sm block">Tamil Nadu, India</span>
            <span className="text-zinc-400 text-xs block mt-1">Kallakurichi / Coimbatore</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;