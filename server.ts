import express from "express";
import http from "http";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const server = http.createServer(app);

  // Middleware
  app.use(express.json({ limit: '30mb' }));

  // Lazy initialization of Gemini client
  const getAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  // API endpoint for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request. 'messages' must be an array of objects." });
      }

      const ai = getAI();

      // Format messages into Gemini conversation format
      const contents = messages.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      const systemInstruction = `You are "K-Bot", the friendly, intelligent Virtual AI Assistant for Kamalesh S's personal portfolio website.
Your objective is to help recruiters, engineering managers, and visitors learn about Kamalesh's profile, projects, academic records, and skills in a professional and engaging manner.

Who is Kamalesh S?
- Role & Focus: B.Tech Information Technology Graduate | Aspiring Control Room Specialist / IT Systems Support.
- Professional Summary: Hands-on experience in systems monitoring, troubleshooting, and cloud-based real-time data tracking, backed by verified training in Cloud Computing, Microsoft Azure Fundamentals (AZ-900), and Computer Systems Security.
- Education:
  * B.Tech in Information Technology from SNS College of Technology, Coimbatore (2024 – 2027, CGPA: 7.52).
  * Diploma in Computer Science Engineering from Muthayammal Polytechnic College, Namakkal (2021 – 2024, 84%).
- Location: Kallakurichi / Coimbatore, Tamil Nadu, India.
- Career Goal: Seeking a Control Room Specialist / IT Systems Support role in a fast-paced, high-availability operational environment.
- Core Technical Skills:
  * Systems & Monitoring: Real-Time Data Monitoring, Cloud Computing, AWS (IoT), Microsoft Azure Fundamentals (AZ-900)
  * Databases: SQL, DBMS, MySQL, MongoDB
  * Programming Languages: Python, Java, C, JavaScript
  * Troubleshooting & Support Tools: Error Detection & Debugging, OpenAI API Tooling, NLP, PDF Processing, Diagnostic Testing
  * Data Analysis Tools: Microsoft Excel (Formulas, Pivot Tables), Power BI, Data Visualization
  * Developer Tools & Core Concepts: Git & GitHub, Visual Studio Code, Data Structures, OOP, Problem-Solving, Time Management
- Key Projects:
  1. Sense-to-Cloud: Real-Time IoT Monitoring connecting Raspberry Pi sensors to AWS cloud services for continuous, real-time data monitoring and alerts.
  2. AI Code Assistant: Error Detection & Diagnostic Tool using OpenAI API & Streamlit that detects code errors, explains root causes, and suggests fixes.
  3. AI ATS Resume Analyzer: Python and Streamlit tool analyzing documents against rule sets, identifying gaps, and generating compatibility scores.
  4. SmartCompress: Python desktop batch compressor with CustomTkinter, FFmpeg, Pillow, multi-threading, and live status tracking.
- Industrial Experience:
  * Backend Development Intern at LET'S GAMETECH, Coimbatore (Dec 2025, 30 Days): Node.js, MongoDB, and DBMS backend logic and troubleshooting.
  * Frontend Development Intern at dsignz media, Coimbatore (Jun – Jul 2025, 21 Days): Industry training in responsive frontend engineering and UI execution.
- Certifications:
  * Microsoft Azure Fundamentals (AZ-900) — Cursa
  * Cloud Computing: Beginner to Advanced — University of Illinois, via Cursa
  * Computer Systems Security — MIT, via Cursa
  * Full Stack Web Development — Cursa
  * Career Essentials in Generative AI — Microsoft & LinkedIn Learning
  * Diploma in Computer Application (DCA), Grade A — CSC | Computer Hardware & Networking and Android Development — Value Added Institute, Salem
- Contact Details:
  * Official Email: kamalesh.s.it.2023@snsct.org
  * Personal Email: kamaleshsekar9487@gmail.com
  * Phone: 9677643687
  * GitHub: https://github.com/kamal-420
  * LinkedIn: https://linkedin.com/in/kamalesh-s-56aa60330
  * Portfolio: https://kamalesh.ai.studio (also https://kamal-s.netlify.app)

Response Guidelines:
1. Speak as "K-Bot", Kamalesh's Virtual AI assistant. Always remain professional, polite, and enthusiastic.
2. Answer questions concisely with clear formatting (markdown bullet points, bold key phrases).
3. If asked about resume download, inform them they can click "Download Resume" in the header to get his 1-page resume PDF directly.
4. Keep the tone recruiter-focused, highlighting his real-time systems monitoring, troubleshooting, cloud competence, and database reliability.
5. If asked for contact info, provide both kamalesh.s.it.2023@snsct.org and kamaleshsekar9487@gmail.com, as well as his phone number 9677643687.`;

      let response;
      const modelsToTry = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-2.5-flash"];
      let lastError: any = null;

      if (ai) {
        for (const modelName of modelsToTry) {
          try {
            response = await ai.models.generateContent({
              model: modelName,
              contents: contents,
              config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
              }
            });
            if (response && response.text) {
              break;
            }
          } catch (err: any) {
            lastError = err;
          }
        }
      }

      if (response && response.text) {
        return res.json({ content: response.text });
      }

      // Intelligent local knowledge base fallback when Gemini API hits quota limits or network delays
      const userQuery = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let fallbackText = "Hello! I am K-Bot, Kamalesh S's virtual AI assistant. ";
      if (userQuery.includes("project") || userQuery.includes("built")) {
        fallbackText += "Kamalesh has built several impactful projects including:\n- **Sense-to-Cloud**: Real-Time IoT monitoring connecting Raspberry Pi sensors to AWS Cloud for live telemetry and alerts.\n- **AI Code Assistant**: Error detection & diagnostic tool using OpenAI API & Streamlit that identifies code errors and proposes fixes.\n- **AI ATS Resume Analyzer**: Document evaluation tool analyzing resume keywords, gaps, and compatibility scores.\n- **SmartCompress**: Python desktop batch compression utility with multithreading and live tracking.";
      } else if (userQuery.includes("skill") || userQuery.includes("technical")) {
        fallbackText += "Kamalesh's core technical expertise spans:\n- **Systems & Monitoring**: Real-Time Data Monitoring, Cloud Computing, AWS (IoT), Azure Fundamentals (AZ-900)\n- **Databases**: SQL, DBMS, MySQL, MongoDB\n- **Languages**: Python, Java, C, JavaScript\n- **Tools**: Git, GitHub, VS Code, Power BI, Excel (Pivot Tables/Formulas)";
      } else if (userQuery.includes("contact") || userQuery.includes("email") || userQuery.includes("phone")) {
        fallbackText += "You can reach Kamalesh at:\n- **Official Email**: kamalesh.s.it.2023@snsct.org\n- **Personal Email**: kamaleshsekar9487@gmail.com\n- **Phone**: +91 9677643687\n- **LinkedIn**: linkedin.com/in/kamalesh-s-56aa60330\n- **GitHub**: github.com/kamal-420";
      } else if (userQuery.includes("education") || userQuery.includes("college") || userQuery.includes("degree")) {
        fallbackText += "Kamalesh's academic background:\n- **B.Tech in Information Technology**: SNS College of Technology, Coimbatore (2024 – 2027, CGPA: 7.52)\n- **Diploma in Computer Science Engineering**: Muthayammal Polytechnic College, Namakkal (2021 – 2024, 84%)";
      } else if (userQuery.includes("resume") || userQuery.includes("cv")) {
        fallbackText += "You can download Kamalesh's verified 1-page ATS Resume PDF anytime by clicking the **'Download Resume'** button in the top navigation bar or the Hero section!";
      } else {
        fallbackText += "Kamalesh S is a B.Tech IT graduate and aspiring Control Room Specialist / IT Systems Support engineer with hands-on experience in real-time systems monitoring, cloud infrastructure, and troubleshooting. Feel free to ask about his projects, skills, education, or contact details!";
      }

      return res.json({ content: fallbackText });
    } catch (error: any) {
      console.error("Chatbot processing error:", error);
      return res.json({ 
        content: "Hello! I am K-Bot. Kamalesh is a B.Tech IT graduate specialized in Systems Monitoring, Cloud Infrastructure, and IT Support. Please explore his projects above or reach him at kamaleshsekar9487@gmail.com." 
      });
    }
  });

  // API endpoint to upload or update profile photo
  app.post("/api/upload-photo", (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64 || typeof imageBase64 !== "string") {
        return res.status(400).json({ error: "Missing imageBase64 data." });
      }
      
      // Extract base64 part
      const matches = imageBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
      let buffer: Buffer;
      if (matches) {
        buffer = Buffer.from(matches[2], 'base64');
      } else {
        buffer = Buffer.from(imageBase64, 'base64');
      }
      
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      const targetPath = path.join(publicDir, 'kamalesh_photo.jpg');
      fs.writeFileSync(targetPath, buffer);
      
      res.json({ success: true, url: '/kamalesh_photo.jpg?t=' + Date.now() });
    } catch (err: any) {
      console.error("Error saving uploaded photo:", err);
      res.status(500).json({ error: err.message || "Failed to save photo" });
    }
  });

  // Vite middleware for development with full HMR WebSocket integration
  if (process.env.NODE_ENV !== "production") {
    // When served through Cloud Run / reverse proxy, public traffic arrives on port 443 (HTTPS)
    // Connecting HMR directly to the shared HTTP server with clientPort: 443 ensures
    // the browser connects to wss://<domain>:443/ without port mismatch or trailing colon bugs.
    const hmrClientPort = (process.env.APP_URL && process.env.APP_URL.startsWith('https://')) ? 443 : 3000;

    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: {
          server: server,
          clientPort: hmrClientPort,
        },
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
