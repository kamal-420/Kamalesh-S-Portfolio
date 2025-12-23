import React from 'react';
import SectionHeader from './SectionHeader.tsx';

const Workshops: React.FC = () => {
  const workshops = [
    {
      title: "AR/VR Immersion",
      description: "Hands-on training in AR/VR fundamentals, 3D interaction, and immersive content creation using industry-leading toolsets.",
      meta: "Advanced Certification"
    },
    {
      title: "Sense-to-Cloud IoT",
      description: "End-to-end IoT solutions with Raspberry Pi & AWS, covering sensor integration, cloud connectivity, and real-time data monitoring.",
      meta: "Cloud Architecture"
    }
  ];

  return (
    <div>
      <SectionHeader title="Technical Altars" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {workshops.map((workshop) => (
          <div key={workshop.title} className="royal-card p-12 rounded-[2.5rem] bg-gradient-to-br from-[#121235] to-[#050510] group">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-6">{workshop.meta}</p>
            <h3 className="royal-text text-2xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform">
              {workshop.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed italic">
              "{workshop.description}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;