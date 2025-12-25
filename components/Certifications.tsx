import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Augmented Reality & Virtual Reality Specialist",
      issuer: "SNS College of Technology",
      date: "2024",
      description: "Comprehensive training in immersive technology and 3D environment design.",
      link: "https://drive.google.com/file/d/1E5uJSWqMf1pbj_rXTEb-gOk2fs_ZBS1s/view?usp=drivesdk"
    },
    {
      title: "Sense-to-Cloud IoT Architect",
      issuer: "AWS & SNSCT",
      date: "2024",
      description: "Integration of hardware sensors with AWS cloud for real-time data analytics.",
      link: "https://drive.google.com/file/d/13I8fVWdcLxogzLbru15BhEioZtgWCm0R/view?usp=drivesdk"
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "Frontend Masterclass",
      date: "2023",
      description: "Mastery of mobile-first design principles and cross-platform compatibility.",
      link: "https://drive.google.com/file/d/1cAcfFkcZEDErovRSGqaF7gZihR9znMdx/view?usp=drivesdk"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "SNS College of Technology",
      date: "2023",
      description: "Core concepts of virtualization, cloud security, and architecture.",
      link: "https://drive.google.com/file/d/1U3oHKbZobYQmHKNEV4YPu_Ck3JNyt4kz/view?usp=drivesdk"
    }
  ];

  const archiveFolder = "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4";

  return (
    <div>
      <SectionHeader title="Royal Credentials" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="royal-card group relative p-8 md:p-10 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 overflow-hidden flex flex-col"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4AF37]/10 transition-all duration-700"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-3-3h6l-3 3z"/><path d="M12 21l-9-9 9-9 9 9-9 9z"/></svg>
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
          <span>Browse All Certificates</span>
        </a>
        <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Secure Cloud Archive</p>
      </div>
    </div>
  );
};

export default Certifications;