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
    top: 36,
    bottom: 36,
    left: 40,
    right: 40
  }
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Global styling constants
const COLOR_PRIMARY = '#0F172A'; // Deep slate
const COLOR_SECONDARY = '#475569'; // Soft slate
const COLOR_ACCENT = '#B45309'; // Warm amber/gold
const COLOR_TEXT = '#334155'; // Dark grey
const COLOR_LINE = '#E2E8F0'; // Light divider

// 1. Header Section
doc.font('Helvetica-Bold')
   .fontSize(22)
   .fillColor(COLOR_PRIMARY)
   .text('KAMALESH S', { align: 'center' });

doc.moveDown(0.2);

doc.font('Helvetica')
   .fontSize(9.5)
   .fillColor(COLOR_SECONDARY)
   .text('B.Tech Information Technology Student | Aspiring Software Developer / Data Analyst', { align: 'center' });

doc.moveDown(0.3);

// Contact Info Line
const contactInfo = 'Kallakurichi, Tamil Nadu  |  9677643687  |  kamaleshsekar9487@gmail.com';
doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor(COLOR_TEXT)
   .text(contactInfo, { align: 'center' });

doc.moveDown(0.2);

const linksInfo = 'LinkedIn: linkedin.com/in/kamalesh-s-56aa60330  |  GitHub: github.com/kamal-420  |  Portfolio: kamalesh-s-portfolio.netlify.app';
doc.text(linksInfo, { align: 'center' });

doc.moveDown(0.8);

// Helper to draw section header with a nice line
function drawSectionHeader(title) {
  doc.font('Helvetica-Bold')
     .fontSize(10.5)
     .fillColor(COLOR_PRIMARY)
     .text(title.toUpperCase(), { characterSpacing: 0.5 });
  
  const y = doc.y + 2;
  doc.moveTo(40, y)
     .lineTo(572, y)
     .strokeColor(COLOR_LINE)
     .lineWidth(0.75)
     .stroke();
  
  doc.moveDown(0.6);
}

// 2. Professional Summary
drawSectionHeader('Professional Summary');
doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor(COLOR_TEXT)
   .text(
     'B.Tech Information Technology student with hands-on experience in Python, Java, SQL, and Full Stack Web Development, supported by verified training in Microsoft Azure Fundamentals, Cloud Computing, and Generative AI. Built AI-powered tools, including a code assistant and an ATS resume analyzer, using Python, Streamlit, and NLP. Also developed a desktop image/video compression utility and multiple responsive web applications using React, HTML5, CSS3, and Bootstrap. Completed Frontend Development training in HTML, CSS, and JavaScript, and Backend Development training in Node.js, MongoDB, and DBMS concepts. Seeking a Graduate Trainee / Software Engineer / Python Developer / Full Stack Developer / Data Analyst / Associate Software Engineer role to apply technical skills and deliver measurable impact on real-world projects.',
     { align: 'justify', lineGap: 2 }
   );

doc.moveDown(1.0);

// 3. Technical Skills
drawSectionHeader('Technical Skills');

const skillsData = [
  { label: 'Programming Languages', val: 'Python, Java, C, C++, JavaScript' },
  { label: 'Databases', val: 'SQL, DBMS, MySQL, MongoDB' },
  { label: 'Data Analysis & Visualization Tools', val: 'Microsoft Excel (Formulas, Pivot Tables), Power BI, Data Visualization' },
  { label: 'Cloud & AI', val: 'Microsoft Azure Fundamentals (AZ-900), AWS (IoT), Cloud Computing, Generative AI, OpenAI API, NLP' },
  { label: 'Web Technologies', val: 'HTML5, CSS3, JavaScript, React, Node.js, Bootstrap, Streamlit, CustomTkinter' },
  { label: 'Developer Tools', val: 'Git, GitHub, Visual Studio Code, FFmpeg' },
  { label: 'Core CS Concepts', val: 'Data Structures, Object-Oriented Programming (OOP), DBMS, Problem-Solving' },
  { label: 'Soft Skills', val: 'Communication, Teamwork & Collaboration, Leadership, Time Management' }
];

skillsData.forEach(item => {
  doc.font('Helvetica-Bold')
     .fontSize(8.5)
     .fillColor(COLOR_PRIMARY)
     .text(item.label + ': ', { continued: true })
     .font('Helvetica')
     .fillColor(COLOR_TEXT)
     .text(item.val, { lineGap: 1 });
});

doc.moveDown(1.0);

// 4. Education
drawSectionHeader('Education');

// Education Entry 1
doc.font('Helvetica-Bold')
   .fontSize(9)
   .fillColor(COLOR_PRIMARY)
   .text('B.Tech, Information Technology', { continued: true })
   .font('Helvetica')
   .fillColor(COLOR_TEXT)
   .text(' | SNS College of Technology, Coimbatore, Tamil Nadu', { continued: true })
   .font('Helvetica-Bold')
   .text('   CGPA: 7.3', { align: 'right' });

doc.moveDown(0.2);

// Education Entry 2
doc.font('Helvetica-Bold')
   .fontSize(9)
   .fillColor(COLOR_PRIMARY)
   .text('Diploma, Computer Science Engineering', { continued: true })
   .font('Helvetica')
   .fillColor(COLOR_TEXT)
   .text(' | Muthayammal Polytechnic College, Namakkal, Tamil Nadu', { continued: true })
   .font('Helvetica-Bold')
   .text('   CGPA: 84%', { align: 'right' });

doc.moveDown(1.0);

// 5. Projects
drawSectionHeader('Projects');

const projects = [
  {
    title: 'SmartCompress — Desktop Image & Video Compression Tool',
    bullets: [
      'Engineered a Python desktop application with CustomTkinter for batch image and video compression, preserving original folder structure across processed files.',
      'Integrated FFmpeg for video compression and Pillow for image processing, with multi-threading to keep the UI responsive and display live compression statistics.'
    ]
  },
  {
    title: 'AI Code Assistant',
    bullets: [
      'Built an AI-powered coding assistant using the OpenAI API and Streamlit that explains code, detects errors, suggests improvements, and generates code snippets.',
      'Designed the frontend interface with HTML and CSS for an interactive, user-friendly coding support experience.'
    ]
  },
  {
    title: 'AI ATS Resume Analyzer',
    bullets: [
      'Developed an AI-powered resume analyzer in Python and Streamlit that evaluates ATS compatibility, identifies missing keywords, and recommends improvements.',
      'Applied NLP techniques and PDF processing to parse resume content and generate keyword-based scoring and recommendations.'
    ]
  },
  {
    title: 'Portfolio Website',
    bullets: [
      'Built a responsive personal portfolio using React.js, JavaScript, HTML5, CSS3, and Bootstrap, showcasing projects, skills, internships, and certifications; version-controlled on GitHub and deployed on Netlify.'
    ]
  },
  {
    title: 'Responsive Web Development Using Frontend Technologies',
    bullets: [
      'Created a fully responsive, cross-browser website using HTML5, CSS3, JavaScript, and Bootstrap with reusable React components, version-controlled via Git and GitHub.'
    ]
  },
  {
    title: 'Sense-to-Cloud: IoT with Raspberry Pi & AWS',
    bullets: [
      'Implemented an end-to-end IoT pipeline connecting Raspberry Pi sensors to AWS cloud services for real-time data monitoring.'
    ]
  }
];

projects.forEach(proj => {
  doc.font('Helvetica-Bold')
     .fontSize(8.5)
     .fillColor(COLOR_PRIMARY)
     .text(proj.title, { lineGap: 1 });
  
  proj.bullets.forEach(bullet => {
    doc.font('Helvetica')
       .fontSize(8)
       .fillColor(COLOR_TEXT)
       .text('•  ' + bullet, { indent: 10, lineGap: 1.5, align: 'justify' });
  });
  doc.moveDown(0.4);
});

doc.moveDown(0.6);

// 6. Internships
drawSectionHeader('Internships');

// Internship 1
doc.font('Helvetica-Bold')
   .fontSize(9)
   .fillColor(COLOR_PRIMARY)
   .text('Frontend Development Intern', { continued: true })
   .font('Helvetica')
   .fillColor(COLOR_TEXT)
   .text(' | dsignz media, Coimbatore', { continued: true })
   .font('Helvetica-Bold')
   .text('   Jun – Jul 2025 (21 Days)', { align: 'right' });

doc.font('Helvetica')
   .fontSize(8)
   .fillColor(COLOR_TEXT)
   .text('•  Completed a 21-day industry training program in Frontend Development, applying HTML, CSS, and JavaScript in hands-on UI exercises.', { indent: 10, lineGap: 1.5 });

doc.moveDown(0.3);

// Internship 2
doc.font('Helvetica-Bold')
   .fontSize(9)
   .fillColor(COLOR_PRIMARY)
   .text('Backend Development Intern', { continued: true })
   .font('Helvetica')
   .fillColor(COLOR_TEXT)
   .text(' | LET\'S GAMETECH, Coimbatore', { continued: true })
   .font('Helvetica-Bold')
   .text('   Dec 2025 (30 Days)', { align: 'right' });

doc.font('Helvetica')
   .fontSize(8)
   .fillColor(COLOR_TEXT)
   .text('•  Trained in Node.js, MongoDB, and DBMS-based backend development through a 30-day industrial internship, applying concepts to real-world application logic.', { indent: 10, lineGap: 1.5 });

doc.moveDown(1.0);

// 7. Certifications
drawSectionHeader('Certifications');

const certs = [
  'Microsoft Azure Fundamentals (AZ-900) — Cursa  |  Cloud Computing: Beginner to Advanced — University of Illinois, via Cursa',
  'Full Stack Web Development — Cursa  |  Computer Systems Security — MIT, via Cursa',
  'Career Essentials in Generative AI — Microsoft & LinkedIn Learning',
  'Diploma in Computer Application (DCA), Grade A — CSC  |  Computer Hardware & Networking (80 hrs) and Android Development (80 hrs) — Value Added Institute, Salem'
];

certs.forEach(cert => {
  doc.font('Helvetica')
     .fontSize(8)
     .fillColor(COLOR_TEXT)
     .text('•  ' + cert, { indent: 10, lineGap: 1.5 });
});

doc.moveDown(1.0);

// 8. Achievements & Hackathons
drawSectionHeader('Achievements & Hackathons');

const achievements = [
  'Secured 2nd Place in Skillathon \'26 — Sri Ramakrishna College of Arts & Science, Coimbatore',
  'Participated in Adobe India Hackathon, MOSIP Decode 2025 (IIIT Bangalore), and Odoo x SNS Hiring Hackathon \'26, via Unstop',
  'Attended the AR/VR: Creating Immersive Experience for Beginners workshop at NETRIX \'25, KPR Institute of Engineering and Technology'
];

achievements.forEach(ach => {
  doc.font('Helvetica')
     .fontSize(8)
     .fillColor(COLOR_TEXT)
     .text('•  ' + ach, { indent: 10, lineGap: 1.5 });
});

doc.end();

stream.on('finish', () => {
  console.log('PDF Resume generated successfully at ' + outputPath);
});
