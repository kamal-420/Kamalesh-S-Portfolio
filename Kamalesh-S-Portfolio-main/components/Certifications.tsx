import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Cursa",
      date: "Verified",
      description: "Gained core competency in cloud concepts, Azure architecture, azure services, security, privacy, compliance, and cloud pricing structures.",
      link: "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4",
      badge: "Cloud"
    },
    {
      title: "Cloud Computing: Beginner to Advanced",
      issuer: "University of Illinois, via Cursa",
      date: "Verified",
      description: "Intensive training on cloud deployment strategies, distributed storage models, virtualization, scalability, and infrastructure engineering.",
      link: "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4",
      badge: "Systems"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Cursa",
      date: "Verified",
      description: "Full-stack development training covering responsive frontend visual layout design, database integrations, backend APIs, and web hosting.",
      link: "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4",
      badge: "Fullstack"
    },
    {
      title: "Computer Systems Security",
      issuer: "MIT, via Cursa",
      date: "Verified",
      description: "Acquired rigorous credentials on computer systems engineering, threat modeling, network security, cryptography, and secure systems execution.",
      link: "https://drive.google.com/file/d/1U3oHKbZobYQmHKNEV4YPu_Ck3JNyt4kz/view?usp=drivesdk",
      badge: "Security"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn Learning",
      date: "AI Cert",
      description: "Learned core concepts in natural language processing (NLP), generative foundation models, prompt engineering, and ethical deployment of AI systems.",
      link: "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4",
      badge: "AI"
    },
    {
      title: "Diploma in Computer Application (DCA) - Grade A",
      issuer: "CSC | Value Added Institute, Salem",
      date: "160 Hrs Total",
      description: "Awarded Grade A. Includes professional competency training in Computer Hardware & Networking (80 hrs) and Android Development (80 hrs) at Value Added Institute, Salem.",
      link: "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4",
      badge: "DCA / CSC"
    }
  ];

  const archiveFolder = "https://drive.google.com/drive/folders/1L0zrsSFh9I3zpCuSsCkNtTgeodtrqyd4";

  return (
    <div>
      <SectionHeader title="Technical Honors &amp; Certifications" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 mb-12">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="royal-card bg-[#121217] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/30 hover:translate-y-[-2px]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] font-black tracking-widest text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-2.5 py-1 rounded border border-[#D4AF37]/20">
                  {cert.badge}
                </span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase">{cert.date}</span>
              </div>
              
              <h3 className="royal-text text-lg font-bold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4">
                {cert.issuer}
              </p>
              
              <p className="text-zinc-400 text-xs leading-relaxed mb-6 italic">
                "{cert.description}"
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/5 mt-auto">
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-[#D4AF37] transition-colors"
              >
                <span>View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a 
          href={archiveFolder}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#D4AF37]/50 text-zinc-300 hover:text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all bg-white/3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <span>Open Full Archive</span>
        </a>
      </div>
    </div>
  );
};

export default Certifications;