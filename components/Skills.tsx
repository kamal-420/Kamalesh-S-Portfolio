import React from 'react';
import SectionHeader from './SectionHeader.tsx';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Systems & Monitoring",
      skills: [
        "Real-Time Data Monitoring",
        "Cloud Computing",
        "AWS (IoT)",
        "Microsoft Azure Fundamentals (AZ-900)"
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        "SQL",
        "MySQL",
        "DBMS",
        "MongoDB"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "JavaScript",
        "Java",
        "C"
      ]
    },
    {
      title: "Troubleshooting & Support Tools",
      skills: [
        "Error Detection & Debugging",
        "Diagnostic Testing",
        "OpenAI API Tooling",
        "NLP & PDF Processing"
      ]
    },
    {
      title: "Data Analysis Tools",
      skills: [
        "Microsoft Excel (Formulas, Pivot Tables)",
        "Power BI",
        "Data Visualization"
      ]
    },
    {
      title: "Developer Tools & Core Concepts",
      skills: [
        "Git & GitHub",
        "Visual Studio Code",
        "Data Structures",
        "OOP"
      ]
    }
  ];

  return (
    <div>
      <SectionHeader title="Technical Core" />
      
      <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-12 text-center font-bold">
        A curated compilation of technical capabilities, languages, and tools
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
        {skillCategories.map((cat) => (
          <div 
            key={cat.title} 
            className="royal-card p-6 md:p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 relative group overflow-hidden"
          >
            <h3 className="royal-text text-lg md:text-xl font-bold text-white mb-6 border-b border-white/5 pb-3 tracking-wide">
              {cat.title}
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-2 bg-white/3 border border-white/5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-default flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 group-hover:bg-[#D4AF37] transition-colors"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;