import React from 'react';
import SectionHeader from './SectionHeader.tsx';

interface WorkshopItem {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const Workshops: React.FC = () => {
  const workshopsData: WorkshopItem[] = [
    {
      title: "Immersive AR/VR Systems & Interaction Models",
      organization: "NETRIX '25, KPR Institute",
      date: "Feb 2025",
      description: "Explored 3D viewport rendering pipeline, basic spatial mesh optimization, and immersive user experiences using industry standard engines."
    },
    {
      title: "AWS Cloud Telemetry & Technical Essentials",
      organization: "Amazon Web Services (AWS) Academy",
      date: "Oct 2024",
      description: "Gained core hands-on competency in AWS compute (EC2), VPC subnets, AWS IoT endpoints, and real-time streaming telemetry structures."
    },
    {
      title: "Advanced Relational Data Design & Query Performance",
      organization: "SNS i-Hub Technology Center",
      date: "Aug 2024",
      description: "Focused on relational index layout, normalization rules, execution plans, and query optimizations for high-throughput relational structures."
    }
  ];

  return (
    <div>
      <SectionHeader title="Technical Workshops" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
        {workshopsData.map((item, index) => (
          <div 
            key={index} 
            className="royal-card p-6 md:p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6 gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </span>
                <span className="text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                  {item.date}
                </span>
              </div>

              <h3 className="royal-text text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4">
                {item.organization}
              </p>

              <p className="text-zinc-400 text-xs leading-relaxed italic">
                "{item.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
