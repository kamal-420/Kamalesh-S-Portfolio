const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Ensure public folder exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'Kamalesh_S_Resume.pdf');
const doc = new PDFDocument({
  size: 'letter',
  margins: {
    top: 28,
    bottom: 28,
    left: 36,
    right: 36
  },
  autoFirstPage: true
});

let pageCount = 1;
doc.on('pageAdded', () => {
  pageCount++;
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Styling constants
const COLOR_PRIMARY = '#111827'; // Dark Slate / Near Black
const COLOR_TEXT = '#1f2937'; // Body text
const COLOR_LINE = '#374151'; // Dark divider line as shown in image

// 1. Header Section
doc.font('Times-Bold')
   .fontSize(19)
   .fillColor(COLOR_PRIMARY)
   .text('KAMALESH S', { align: 'center' });

doc.moveDown(0.15);

doc.font('Times-Italic')
   .fontSize(9.5)
   .fillColor(COLOR_TEXT)
   .text('B.Tech Information Technology Graduate | Aspiring Control Room Specialist / IT Systems Support', { align: 'center' });

doc.moveDown(0.2);

// Contact Info Line
doc.font('Times-Roman')
   .fontSize(8.5)
   .fillColor(COLOR_TEXT)
   .text('Kallakurichi, Tamil Nadu | 9677643687 | kamalesh.s.it.2023@snsct.org', { align: 'center' });

doc.moveDown(0.15);

const linksInfo = 'LinkedIn: linkedin.com/in/kamalesh-s-56aa60330 | GitHub: github.com/kamal-420 | Portfolio: kamal-s.netlify.app';
doc.text(linksInfo, { align: 'center' });

doc.moveDown(0.35);

// Helper to draw section header with a nice line
function drawSectionHeader(title) {
  doc.font('Times-Bold')
     .fontSize(9.5)
     .fillColor(COLOR_PRIMARY)
     .text(title.toUpperCase(), { characterSpacing: 0.3 });
  
  const y = doc.y + 1;
  doc.moveTo(36, y)
     .lineTo(576, y)
     .strokeColor(COLOR_LINE)
     .lineWidth(0.8)
     .stroke();
  
  doc.moveDown(0.3);
}

// 2. Professional Summary
drawSectionHeader('Professional Summary');
doc.font('Times-Roman')
   .fontSize(8.5)
   .fillColor(COLOR_TEXT)
   .text(
     'B.Tech Information Technology graduate with hands-on experience in systems monitoring, troubleshooting, and cloud-based real-time data tracking, backed by verified training in Cloud Computing, Microsoft Azure Fundamentals, and Computer Systems Security. Built an AI-powered code assistant that detects errors and diagnoses issues, and an IoT pipeline that monitors sensor data in real time via AWS. Strong attention to detail, DBMS and database fundamentals, and a track record of quickly learning new tools and technologies across multiple certifications and hackathons. Seeking a Control Room Specialist / IT Systems Support role in a fast-paced, high-availability operational environment.',
     { align: 'justify', lineGap: 1.2 }
   );

doc.moveDown(0.35);

// 3. Technical Skills
drawSectionHeader('Technical Skills');

const skillsData = [
  { label: 'Systems & Monitoring', val: 'Real-Time Data Monitoring, Cloud Computing, AWS (IoT), Microsoft Azure Fundamentals (AZ-900)' },
  { label: 'Databases', val: 'SQL, DBMS, MySQL, MongoDB' },
  { label: 'Programming Languages', val: 'Python, Java, C, JavaScript' },
  { label: 'Troubleshooting & Support Tools', val: 'Error Detection & Debugging (OpenAI API-based tooling), NLP, PDF Processing' },
  { label: 'Data Analysis Tools', val: 'Microsoft Excel (Formulas, Pivot Tables), Power BI, Data Visualization' },
  { label: 'Developer Tools', val: 'Git, GitHub, Visual Studio Code' },
  { label: 'Core Concepts', val: 'Data Structures, Object-Oriented Programming (OOP), Problem-Solving' },
  { label: 'Soft Skills', val: 'Communication, Teamwork & Collaboration, Attention to Detail, Time Management' }
];

skillsData.forEach(item => {
  doc.font('Times-Bold')
     .fontSize(8.2)
     .fillColor(COLOR_PRIMARY)
     .text(item.label + ': ', { continued: true })
     .font('Times-Roman')
     .fillColor(COLOR_TEXT)
     .text(item.val, { lineGap: 0.8 });
});

doc.moveDown(0.35);

// 4. Education
drawSectionHeader('Education');

// Education Entry 1
doc.font('Times-Bold')
   .fontSize(8.5)
   .fillColor(COLOR_PRIMARY)
   .text('B.Tech, Information Technology', { continued: true })
   .font('Times-Roman')
   .fillColor(COLOR_TEXT)
   .text(' | SNS College of Technology, Coimbatore, Tamil Nadu', { continued: true })
   .font('Times-Roman')
   .text('CGPA: 7.52', { align: 'right' });

doc.moveDown(0.15);

// Education Entry 2
doc.font('Times-Bold')
   .fontSize(8.5)
   .fillColor(COLOR_PRIMARY)
   .text('Diploma, Computer Science Engineering', { continued: true })
   .font('Times-Roman')
   .fillColor(COLOR_TEXT)
   .text(' | Muthayammal Polytechnic College, Namakkal (2021 – 2024)', { continued: true })
   .font('Times-Roman')
   .text('CGPA: 84%', { align: 'right' });

doc.moveDown(0.35);

// 5. Relevant Projects
drawSectionHeader('Relevant Projects');

const projects = [
  {
    title: 'Sense-to-Cloud — Real-Time IoT Monitoring with Raspberry Pi & AWS',
    bullets: [
      'Implemented an end-to-end IoT pipeline connecting Raspberry Pi sensors to AWS cloud services for continuous, real-time data monitoring — directly applying dashboard and alert-based system monitoring.'
    ]
  },
  {
    title: 'AI Code Assistant — Error Detection & Diagnostic Tool',
    bullets: [
      'Built an AI-powered tool using the OpenAI API and Streamlit that detects code errors, explains root causes, and suggests fixes — applying systematic issue investigation and troubleshooting.',
      'Designed the frontend interface with HTML and CSS for a clear, user-friendly diagnostic experience.'
    ]
  },
  {
    title: 'AI ATS Resume Analyzer — Data Analysis & Compatibility Scoring Tool',
    bullets: [
      'Developed a Python and Streamlit tool that analyzes documents against a rule set, identifies gaps, and generates accuracy-based scoring and recommendations.'
    ]
  },
  {
    title: 'SmartCompress — Desktop Image & Video Compression Tool',
    bullets: [
      'Engineered a Python desktop application with multi-threading and live status tracking, monitoring batch job progress and processing statistics in real time.'
    ]
  }
];

projects.forEach(proj => {
  doc.font('Times-Bold')
     .fontSize(8.5)
     .fillColor(COLOR_PRIMARY)
     .text(proj.title, { lineGap: 0.8 });
  
  proj.bullets.forEach(bullet => {
    doc.font('Times-Roman')
       .fontSize(8.2)
       .fillColor(COLOR_TEXT)
       .text('●   ' + bullet, { indent: 12, lineGap: 1.2, align: 'justify' });
  });
  doc.moveDown(0.18);
});

doc.moveDown(0.2);

// 6. Experience
drawSectionHeader('Experience');

// Experience Entry 1
doc.font('Times-Bold')
   .fontSize(8.5)
   .fillColor(COLOR_PRIMARY)
   .text('Backend Development Intern', { continued: true })
   .font('Times-Roman')
   .fillColor(COLOR_TEXT)
   .text(' | LET\'S GAMETECH, Coimbatore', { continued: true })
   .text('Dec 2025 (30 Days)', { align: 'right' });

doc.font('Times-Roman')
   .fontSize(8.2)
   .fillColor(COLOR_TEXT)
   .text('●   Trained in Node.js, MongoDB, and DBMS-based backend development through a 30-day industrial internship, applying concepts to real-world application logic and troubleshooting.', { indent: 12, lineGap: 1.2, align: 'justify' });

doc.moveDown(0.18);

// Experience Entry 2
doc.font('Times-Bold')
   .fontSize(8.5)
   .fillColor(COLOR_PRIMARY)
   .text('Frontend Development Intern', { continued: true })
   .font('Times-Roman')
   .fillColor(COLOR_TEXT)
   .text(' | dsignz media, Coimbatore', { continued: true })
   .text('Jun – Jul 2025 (21 Days)', { align: 'right' });

doc.font('Times-Roman')
   .fontSize(8.2)
   .fillColor(COLOR_TEXT)
   .text('●   Completed a 21-day industry training program in Frontend Development, applying HTML, CSS, and JavaScript in hands-on UI exercises requiring close attention to detail.', { indent: 12, lineGap: 1.2, align: 'justify' });

doc.moveDown(0.35);

// 7. Certifications
drawSectionHeader('Certifications');

const certs = [
  'Microsoft Azure Fundamentals (AZ-900) — Cursa | Cloud Computing: Beginner to Advanced — University of Illinois, via Cursa',
  'Computer Systems Security — MIT, via Cursa | Full Stack Web Development — Cursa',
  'Career Essentials in Generative AI — Microsoft & LinkedIn Learning',
  'Diploma in Computer Application (DCA), Grade A — CSC | Computer Hardware & Networking (80 hrs) and Android Development (80 hrs) — Value Added Institute, Salem'
];

certs.forEach(cert => {
  doc.font('Times-Roman')
     .fontSize(8.2)
     .fillColor(COLOR_TEXT)
     .text('●   ' + cert, { indent: 12, lineGap: 1.2 });
});

doc.moveDown(0.35);

// 8. Achievements & Hackathons
drawSectionHeader('Achievements & Hackathons');

const achievements = [
  'Secured 2nd Place in Skillathon \'26 — Sri Ramakrishna College of Arts & Science, Coimbatore',
  'Participated in Adobe India Hackathon, MOSIP Decode 2025 (IIIT Bangalore), and Odoo x SNS Coimbatore Hiring Hackathon \'26, via Unstop',
  'Attended the AR/VR: Creating Immersive Experience for Beginners workshop at NETRIX \'25, KPR Institute of Engineering and Technology'
];

achievements.forEach(ach => {
  doc.font('Times-Roman')
     .fontSize(8.2)
     .fillColor(COLOR_TEXT)
     .text('●   ' + ach, { indent: 12, lineGap: 1.2 });
});

doc.end();

stream.on('finish', () => {
  console.log(`PDF Resume generated successfully at ${outputPath} with ${pageCount} page(s).`);
});
