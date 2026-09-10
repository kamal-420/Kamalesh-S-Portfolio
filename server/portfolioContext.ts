/**
 * Unified Portfolio Knowledge Base for K-Bot
 * Single source of truth containing verified facts from Kamalesh S's portfolio.
 */

export const PORTFOLIO_DATA = {
  name: "Kamalesh S",
  title: "B.Tech Information Technology Graduate | Aspiring Control Room Specialist / IT Systems Support",
  location: "Kallakurichi / Coimbatore, Tamil Nadu, India",
  careerObjective: "Seeking a Control Room Specialist / IT Systems Support role in a fast-paced, high-availability operational environment where I can apply my systems monitoring expertise, rapid diagnostic capabilities, and disciplined database fundamentals.",
  summary: "B.Tech Information Technology graduate from SNS College of Technology with hands-on experience in real-time systems monitoring, error diagnostics, and cloud data tracking. Certified in Cloud Computing, Microsoft Azure Fundamentals (AZ-900), and Computer Systems Security.",
  
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "SNS College of Technology, Coimbatore",
      duration: "2024 – 2027",
      grade: "7.52 CGPA",
      status: "Pursuing / Scholar"
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Muthayammal Polytechnic College, Namakkal",
      duration: "2021 – 2024",
      grade: "84% (First Class with Distinction)"
    }
  ],

  skills: {
    systemsAndMonitoring: [
      "Real-Time Data Monitoring",
      "Cloud Computing",
      "AWS (IoT)",
      "Microsoft Azure Fundamentals (AZ-900)"
    ],
    databasesAndStorage: [
      "SQL",
      "MySQL",
      "DBMS",
      "MongoDB"
    ],
    programmingLanguages: [
      "Python",
      "JavaScript",
      "Java",
      "C"
    ],
    troubleshootingAndSupport: [
      "Error Detection & Debugging",
      "Diagnostic Testing",
      "OpenAI API Tooling",
      "NLP & PDF Processing"
    ],
    dataAnalysis: [
      "Microsoft Excel (Formulas, Pivot Tables)",
      "Power BI",
      "Data Visualization"
    ],
    developerToolsAndConcepts: [
      "Git & GitHub",
      "Visual Studio Code",
      "Data Structures",
      "OOP"
    ]
  },

  projects: [
    {
      title: "Sense-to-Cloud — Real-Time IoT Monitoring with Raspberry Pi & AWS",
      description: "End-to-end IoT telemetry system connecting Raspberry Pi sensors to AWS Cloud for continuous real-time data monitoring, live metrics, and anomaly alerts.",
      tech: ["IoT", "Raspberry Pi", "AWS Cloud", "Sensors", "MQTT", "Real-Time Telemetry"],
      category: "Systems & IoT"
    },
    {
      title: "AI Code Assistant — Error Detection & Diagnostic Tool",
      description: "Intelligent diagnostic tool built with OpenAI API and Streamlit that detects code errors, explains root causes, and suggests remedies for debugging.",
      tech: ["Python", "OpenAI API", "Streamlit", "HTML5", "CSS3", "Diagnostics"],
      category: "AI & Intelligence"
    },
    {
      title: "AI ATS Resume Analyzer — Data Analysis & Compatibility Scoring Tool",
      description: "Document evaluation tool built with Python & Streamlit that analyzes resumes against rule sets, identifies gaps, and calculates ATS compatibility scores using NLP.",
      tech: ["Python", "Streamlit", "OpenAI API", "NLP", "PDF Processing"],
      category: "AI & Intelligence"
    },
    {
      title: "SmartCompress — Desktop Image & Video Compression Tool",
      description: "Python desktop batch compression application featuring multi-threading and live progress tracking using CustomTkinter, FFmpeg, and Pillow.",
      tech: ["Python", "CustomTkinter", "FFmpeg", "Pillow", "Multi-threading"],
      category: "Systems & IoT"
    },
    {
      title: "Portfolio Website",
      description: "Digital personal portfolio featuring a royal gold theme, interactive sections, PDF resume generator, and K-Bot AI assistant.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Express"],
      category: "Web Architecture"
    },
    {
      title: "Responsive Web Development Projects",
      description: "Modular, cross-browser responsive web platform layouts optimized for performance and mobile devices.",
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
      category: "Web Architecture"
    }
  ],

  experience: [
    {
      role: "Backend Development Intern",
      company: "LET'S GAMETECH",
      location: "Coimbatore",
      period: "Dec 2025 (30 Days)",
      description: "Implemented Node.js, MongoDB, and DBMS backend logic and troubleshooting."
    },
    {
      role: "Frontend Development Intern",
      company: "dsignz media",
      location: "Coimbatore",
      period: "Jun – Jul 2025 (21 Days)",
      description: "Industry training in responsive frontend engineering, UI execution, and cross-device testing."
    }
  ],

  certifications: [
    "Microsoft Azure Fundamentals (AZ-900) — Cursa",
    "Cloud Computing: Beginner to Advanced — University of Illinois (via Cursa)",
    "Computer Systems Security — MIT (via Cursa)",
    "Full Stack Web Development — Cursa",
    "Career Essentials in Generative AI — Microsoft & LinkedIn Learning",
    "Diploma in Computer Application (DCA), Grade A — CSC Computer Education",
    "Computer Hardware & Networking and Android Development — Value Added Institute, Namakkal/Salem"
  ],

  contact: {
    officialEmail: "kamalesh.s.it.2023@snsct.org",
    personalEmail: "kamaleshsekar9487@gmail.com",
    phone: "+91 9677643687",
    github: "https://github.com/kamal-420",
    linkedin: "https://www.linkedin.com/in/kamalesh-sekar-56aa60330",
    portfolioUrl: "https://kamal-s.netlify.app"
  }
};

/**
 * Builds the comprehensive system instruction for Gemini
 */
export function buildSystemInstruction(): string {
  return `You are "K-Bot", the friendly, intelligent, and highly knowledgeable Virtual AI Assistant for Kamalesh S's personal portfolio website.

YOUR ROLE & PERSONA:
1. Speak with professional warmth, confidence, and clarity as Kamalesh's dedicated portfolio assistant.
2. Engage in natural conversations! You can casually greet visitors ("Hi!", "Hello! How can I help you today?"), respond to "How are you?" ("I'm doing great, thank you! Excited to help you learn about Kamalesh's work."), and handle "Thank you" gracefully ("You're very welcome! Let me know if you need anything else.").
3. For portfolio queries, answer thoroughly and accurately using ONLY the verified facts below.
4. Maintain session conversation context across multiple turns. For example, if the visitor asks "What projects has he built?" and then asks "Which one is the best?", recognize that "which one" refers to the projects discussed and recommend his flagship project ("Sense-to-Cloud" for systems/IoT or "AI Code Assistant" for diagnostic AI tooling) while explaining why.
5. Format your replies with clean Markdown (use bullet points and bold highlights). Keep replies readable, engaging, and reasonably concise without unnecessary padding.

SOURCE OF TRUTH — KAMALESH S'S VERIFIED PORTFOLIO DATA:
- Full Name: ${PORTFOLIO_DATA.name}
- Headline: ${PORTFOLIO_DATA.title}
- Location: ${PORTFOLIO_DATA.location}
- Career Goal: ${PORTFOLIO_DATA.careerObjective}
- Summary: ${PORTFOLIO_DATA.summary}

EDUCATION:
- B.Tech in Information Technology: SNS College of Technology, Coimbatore (2024 – 2027, CGPA: 7.52)
- Diploma in Computer Science Engineering: Muthayammal Polytechnic College, Namakkal (2021 – 2024, 84% First Class with Distinction)

TECHNICAL SKILLS:
- Systems & Monitoring: Real-Time Data Monitoring, Cloud Computing, AWS (IoT), Microsoft Azure Fundamentals (AZ-900)
- Databases & Storage: SQL, MySQL, DBMS, MongoDB
- Programming Languages: Python, JavaScript, Java, C
- Troubleshooting & Support Tools: Error Detection & Debugging, Diagnostic Testing, OpenAI API Tooling, NLP & PDF Processing
- Data Analysis Tools: Microsoft Excel (Formulas, Pivot Tables), Power BI, Data Visualization
- Developer Tools & Concepts: Git & GitHub, Visual Studio Code, Data Structures, OOP

PROJECTS:
1. Sense-to-Cloud — Real-Time IoT Monitoring with Raspberry Pi & AWS: End-to-end telemetry connecting Raspberry Pi sensors to AWS cloud services for continuous, real-time data monitoring and live anomaly alerts.
2. AI Code Assistant — Error Detection & Diagnostic Tool: AI-driven diagnostic application built with OpenAI API and Streamlit that detects code errors, explains root causes, and suggests fixes.
3. AI ATS Resume Analyzer — Data Analysis & Compatibility Scoring Tool: Python & Streamlit tool analyzing resumes against rule sets, identifying formatting and keyword gaps, and calculating compatibility scores using NLP.
4. SmartCompress — Desktop Image & Video Compression Tool: Python desktop utility featuring CustomTkinter, FFmpeg, Pillow, multi-threading, and live progress tracking.
5. Portfolio Website: High-performance portfolio with royal theme, interactive sections, resume generator, and K-Bot AI.
6. Responsive Web Development Projects: Clean UI platforms optimized for cross-browser performance.

INDUSTRIAL EXPERIENCE / INTERNSHIPS:
- Backend Development Intern at LET'S GAMETECH, Coimbatore (Dec 2025, 30 Days): Node.js, MongoDB, and DBMS backend logic and troubleshooting.
- Frontend Development Intern at dsignz media, Coimbatore (Jun – Jul 2025, 21 Days): Industry training in responsive frontend engineering and UI execution.

CERTIFICATIONS:
- Microsoft Azure Fundamentals (AZ-900) — Cursa
- Cloud Computing: Beginner to Advanced — University of Illinois (via Cursa)
- Computer Systems Security — MIT (via Cursa)
- Full Stack Web Development — Cursa
- Career Essentials in Generative AI — Microsoft & LinkedIn Learning
- Diploma in Computer Application (DCA), Grade A — CSC Computer Education
- Computer Hardware & Networking and Android Development — Value Added Institute

CONTACT & PROFILES:
- Official College Email: ${PORTFOLIO_DATA.contact.officialEmail}
- Personal Email: ${PORTFOLIO_DATA.contact.personalEmail}
- Phone: ${PORTFOLIO_DATA.contact.phone}
- GitHub: ${PORTFOLIO_DATA.contact.github}
- LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}
- Resume: Visitors can click the "DOWNLOAD RESUME" button in the Hero section to download his verified 1-page ATS Resume PDF directly (/Kamalesh_S_Resume.pdf).

CRITICAL CONSTRAINTS:
- NEVER invent employers, roles, projects, certifications, or personal facts not listed above.
- If a visitor asks about something not in this record (e.g. personal hobbies, unlisted jobs), politely state that it is not currently listed in Kamalesh's public portfolio and offer to connect them with Kamalesh directly via email.`;
}

/**
 * Intelligent instant fallback response generator
 * Used when Gemini API is unavailable, rate-limited, or times out
 */
export function generateSmartFallback(query: string): string {
  const q = query.toLowerCase().trim();

  // Casual greetings & chit-chat
  if (/^(hi|hello|hey|greetings|hola|good\s(morning|afternoon|evening))\b/i.test(q)) {
    return "Hello! I am **K-Bot**, Kamalesh S's virtual AI assistant. How can I help you explore his portfolio, projects, or background today?";
  }
  if (/^(how\sare\syou|how\'s\sit\sgoing|what\'s\sup)\b/i.test(q)) {
    return "I'm doing great, thank you for asking! I'm here and ready to help you discover Kamalesh's skills, real-time monitoring projects, or academic credentials. What would you like to know?";
  }
  if (/^(thank\syou|thanks|thx|appreciate\sit)\b/i.test(q)) {
    return "You're very welcome! Feel free to ask more questions anytime, or reach out to Kamalesh directly via his contact details.";
  }

  // Projects
  if (q.includes("project") || q.includes("built") || q.includes("work") || q.includes("portfolio")) {
    if (q.includes("best") || q.includes("flagship") || q.includes("favorite")) {
      return "Kamalesh's flagship systems project is **Sense-to-Cloud**, an end-to-end IoT telemetry system connecting Raspberry Pi sensors to AWS Cloud for real-time data monitoring and live anomaly alerts.\n\nIn addition, his **AI Code Assistant** is a standout diagnostic tool utilizing OpenAI API & Streamlit to automatically identify code bugs and suggest root-cause fixes.";
    }
    return "Kamalesh has engineered several impressive systems and software projects:\n\n" +
      "1. **Sense-to-Cloud**: Real-Time IoT telemetry system connecting Raspberry Pi sensors to AWS cloud services for continuous data monitoring and live alerts.\n" +
      "2. **AI Code Assistant**: Diagnostic error-detection tool built with OpenAI API and Streamlit to detect code bugs, explain root causes, and suggest fixes.\n" +
      "3. **AI ATS Resume Analyzer**: Python & Streamlit application evaluating resume compatibility against rule sets using NLP and PDF processing.\n" +
      "4. **SmartCompress**: Multi-threaded desktop batch compressor for images and videos with CustomTkinter, FFmpeg, and Pillow.\n\n" +
      "Would you like to know more details about any specific project?";
  }

  // Skills & Technologies
  if (q.includes("skill") || q.includes("technolog") || q.includes("stack") || q.includes("language") || q.includes("know")) {
    return "Kamalesh's verified technical skills are organized into 6 core areas:\n\n" +
      "- **Systems & Monitoring**: Real-Time Data Monitoring, Cloud Computing, AWS (IoT), Microsoft Azure Fundamentals (AZ-900)\n" +
      "- **Databases & Storage**: SQL, MySQL, DBMS, MongoDB\n" +
      "- **Programming Languages**: Python, JavaScript, Java, C\n" +
      "- **Troubleshooting & Diagnostic Tools**: Error Detection & Debugging, Diagnostic Testing, OpenAI API Tooling, NLP & PDF Processing\n" +
      "- **Data Analysis Tools**: Microsoft Excel (Formulas, Pivot Tables), Power BI, Data Visualization\n" +
      "- **Developer Tools**: Git & GitHub, Visual Studio Code, Data Structures, OOP";
  }

  // Education & Academics
  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("diploma") || q.includes("gpa") || q.includes("cgpa") || q.includes("academic")) {
    return "Here is Kamalesh's educational background:\n\n" +
      "- **B.Tech in Information Technology**: SNS College of Technology, Coimbatore (2024 – 2027, **CGPA: 7.52**)\n" +
      "- **Diploma in Computer Science Engineering**: Muthayammal Polytechnic College, Namakkal (2021 – 2024, **84% First Class with Distinction**)";
  }

  // Experience & Internships
  if (q.includes("experience") || q.includes("intern") || q.includes("company") || q.includes("job")) {
    return "Kamalesh has completed two industrial software engineering internships:\n\n" +
      "1. **Backend Development Intern** at **LET'S GAMETECH**, Coimbatore (Dec 2025, 30 Days): Developed Node.js, MongoDB, and DBMS backend logic and error troubleshooting.\n" +
      "2. **Frontend Development Intern** at **dsignz media**, Coimbatore (Jun – Jul 2025, 21 Days): Industry training in responsive frontend engineering, UI component architecture, and cross-device testing.";
  }

  // Certifications
  if (q.includes("certif") || q.includes("course") || q.includes("credential")) {
    return "Kamalesh holds verified certifications in key computing domains:\n\n" +
      "- **Microsoft Azure Fundamentals (AZ-900)** — Cursa\n" +
      "- **Cloud Computing: Beginner to Advanced** — University of Illinois (via Cursa)\n" +
      "- **Computer Systems Security** — MIT (via Cursa)\n" +
      "- **Full Stack Web Development** — Cursa\n" +
      "- **Career Essentials in Generative AI** — Microsoft & LinkedIn Learning\n" +
      "- **Diploma in Computer Application (DCA)**, Grade A — CSC Computer Education";
  }

  // Contact & Socials
  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("linkedin") || q.includes("github") || q.includes("hire")) {
    return "You can reach Kamalesh directly through any of these channels:\n\n" +
      "- **Official College Email**: kamalesh.s.it.2023@snsct.org\n" +
      "- **Personal Email**: kamaleshsekar9487@gmail.com\n" +
      "- **Phone / WhatsApp**: +91 9677643687\n" +
      "- **LinkedIn**: [Kamalesh Sekar on LinkedIn](https://www.linkedin.com/in/kamalesh-sekar-56aa60330)\n" +
      "- **GitHub**: [github.com/kamal-420](https://github.com/kamal-420)\n\n" +
      "He is actively seeking a **Control Room Specialist / IT Systems Support** position!";
  }

  // Resume
  if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
    return "You can download Kamalesh's official 1-page ATS Resume PDF anytime by clicking the **'DOWNLOAD RESUME'** button in the Hero section of this portfolio, or access it directly at **/Kamalesh_S_Resume.pdf**!";
  }

  // Default overview
  return "I am **K-Bot**, Kamalesh S's virtual AI assistant.\n\n" +
    "Kamalesh is a B.Tech IT scholar specializing in **Real-Time Systems Monitoring**, **Cloud Infrastructure (AWS/Azure)**, and **Diagnostic IT Support**. He is targeting a **Control Room Specialist / IT Systems Support** role.\n\n" +
    "You can ask me about his:\n" +
    "- **Projects** (e.g. *Sense-to-Cloud*, *AI Code Assistant*)\n" +
    "- **Technical Skills** (Python, SQL, AWS, Azure, Real-Time Monitoring)\n" +
    "- **Education & Certifications** (SNS College of Technology, AZ-900, MIT Security)\n" +
    "- **Contact Information** & Resume download";
}
