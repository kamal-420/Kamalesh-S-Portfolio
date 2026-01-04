import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Computer Systems Security",
      issuer: "MIT Certified Course",
      date: "2024",
      description: "Acquired in-depth knowledge on protecting computer systems and networks against various threats and vulnerabilities.",
      link: "https://drive.google.com/file/d/1U3oHKbZobYQmHKNEV4YPu_Ck3JNyt4kz/view?usp=drivesdk",
      badge: "MIT"
    },
    {
      title: "Certified Training in Android Development",
      issuer: "Industrial Training Program",
      date: "2023",
      description: "Completed an 80-hour value-added course designed to meet industrial needs for professional competency.",
      link: "#",
      badge: "80 Hours"
    },
    {
      title: "Computer Hardware and Networking",
      issuer: "Technical Training Center",
      date: "2023",
      description: "Acquired professional competency in setting up, troubleshooting, and securing computer systems and networks.",
      link: "#",
      badge: "80 Hours"
    },
    {
      title: "Diploma in Computer Application (DCA)",
      issuer: "Technical Certification",
      date: "2023",
      description: "Proficient in MS Office Suite (Word, Excel, PowerPoint, Access) and Tally ERP 9 with GST, following a six-month program.",
      link: "#",
      badge: "6 Months"
    }
  ];

  const archiveFolder = "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4";

  return (
    <div>
      <SectionHeader title="Technical Honors" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="royal-card group relative p-8 md:p-10 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 overflow-hidden flex flex-col transition-all duration-500"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4AF37]/10 transition-all duration-700"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-3-3h6l-3 3z"/><path d="M12 21l-9-9 9-9 9 9-9 9z"/></svg>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                  {cert.badge}
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">{cert.date}</span>
            </div>
            
            <h3 className="royal-text text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
              {cert.title}
            </h3>
            
            <p className="text-sm font-semibold text-[#D4AF37]/80 uppercase tracking-widest mb-4">
              {cert.issuer}
            </p>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 italic">
              "{cert.description}"
            </p>
            
            {cert.link !== "#" && (
              <div className="mt-auto">
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors group/link"
                >
                  <span>Verify Credential</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <a 
          href={archiveFolder}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-12 py-5 bg-transparent border-2 border-[#D4AF37]/30 text-[#D4AF37] font-black uppercase text-xs tracking-[0.4em] rounded-2xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all shadow-[0_20px_50px_-15px_rgba(212,175,55,0.1)] flex items-center gap-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <span>Open Full Archive</span>
        </a>
      </div>
    </div>
  );
};

export default Certifications;