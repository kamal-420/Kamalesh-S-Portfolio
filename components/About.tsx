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
              I am <span className="text-[#D4AF37] font-semibold">Kamalesh S</span>, a B.Tech Information Technology graduate from <span className="text-white font-medium">SNS College of Technology</span>, Coimbatore. I have hands-on experience in systems monitoring, troubleshooting, and cloud-based real-time data tracking, backed by verified credentials in Cloud Computing, Microsoft Azure Fundamentals, and Computer Systems Security.
            </p>
            <p>
              My expertise spans <span className="text-[#D4AF37] font-medium">real-time IoT monitoring, error diagnostics, and database management</span> (SQL, MySQL, MongoDB). I have engineered AI-powered diagnostic tools, IoT telemetry pipelines connecting Raspberry Pi to AWS, and desktop multi-threaded utilities.
            </p>
          </div>

          <div className="border-l-2 border-[#D4AF37]/40 pl-6 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Career Objective</h4>
            <p className="text-zinc-400 text-sm leading-relaxed italic">
              "Seeking a Control Room Specialist / IT Systems Support role in a fast-paced, high-availability operational environment where I can apply my systems monitoring expertise, rapid diagnostic capabilities, and disciplined database fundamentals."
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
            <span className="text-white font-bold text-lg block">7.52 CGPA</span>
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