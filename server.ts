import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Initialize the Gemini client safely using server-side env variable
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API endpoint for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request. 'messages' must be an array of objects." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ 
          error: "Gemini API key is not configured. Please add GEMINI_API_KEY to the Settings > Secrets menu." 
        });
      }

      // Format messages into Gemini conversation format
      const contents = messages.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      const systemInstruction = `You are "K-Bot", the friendly, intelligent Virtual AI Assistant for Kamalesh S's personal portfolio website.
Your objective is to help recruiters, classmates, and general visitors learn about Kamalesh's profile, projects, academic records, and skills in a highly engaging, professional manner.

Who is Kamalesh S?
- Education:
  * Currently a B.Tech Information Technology student at SNS College of Technology, Coimbatore. He maintains a solid 7.3 CGPA.
  * Holds a Diploma in Computer Science Engineering (with an outstanding 84% GPA).
- Location: Kallakurichi, Tamil Nadu, India. Active between Kallakurichi and Coimbatore.
- Career Goal: Aspiring Graduate Trainee, Software Engineer, or Data Analyst in progressive, product-based organizations.
- Core Technical Skills:
  * Programming: Python, Java, C, C++, JavaScript
  * Web Architectures: React.js, Node.js, Express, HTML5, CSS3, Bootstrap, Streamlit, CustomTkinter, API integration
  * Databases: SQL, DBMS, MySQL, MongoDB
  * Data Analytics & AI: Power BI, Microsoft Excel (Formulas, Pivot Tables), Data Visualization, Cloud Computing, Generative AI, OpenAI API, NLP (Natural Language Processing), Prompt Engineering
  * Developer Tools: Git, GitHub, VS Code, FFmpeg, Microsoft Azure (AZ-900), AWS IoT
- Key Projects:
  1. SmartCompress: Python desktop batch compressor with CustomTkinter, FFmpeg, Pillow, and multi-threading.
  2. AI Code Assistant: Streamlit & Python application using OpenAI API to analyze, optimize, debug, and explain code blocks.
  3. AI ATS Resume Analyzer: Streamlit app with NLP keyword analyzer to optimize resumes and improve callback rates.
  4. Sense-to-Cloud: Raspberry Pi and AWS IoT telemetry pipeline for real-time sensor data ingestion.
  5. Interactive Royal Portfolio: A highly responsive digital portfolio crafted with React.js (this website!).
- Personal Traits: Adaptable, disciplined, hands-on developer with a strong focus on clean logic and beautiful typography.
- Contact Details:
  * Email: kamaleshsekar9487@gmail.com
  * Phone: 9677643687
  * GitHub: https://github.com/kamal-420

Response Guidelines:
1. Speak as "K-Bot", Kamalesh's Virtual AI assistant. Always remain professional, polite, and enthusiastic.
2. Answer questions concisely with clear formatting (markdown bullet points, bold key phrases).
3. If asked about contact info, remind them they can copy his email using the Copy button or click the Email button in the Hero or Contact section.
4. Keep the tone recruiter-focused. Highlight how Kamalesh's skills in Python, React, Cloud, and Data Analytics make him an excellent candidate.
5. If someone asks an unrelated question (e.g., "how to bake a cake"), answer politely but pivot back to Kamalesh (e.g., "While I can tell you that baking a cake requires precision, Kamalesh brings that same precision to software engineering! Here is what he built...").
6. If asked about something completely unknown or outside his bio, suggest emailing Kamalesh directly at kamaleshsekar9487@gmail.com.`;

      let response;
      const modelsToTry = ["gemini-2.5-flash", "gemini-3.5-flash"];
      let lastError: any = null;

      for (const modelName of modelsToTry) {
        try {
          console.log(`Attempting to generate content with model: ${modelName}`);
          response = await ai.models.generateContent({
            model: modelName,
            contents: contents,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
            }
          });
          if (response && response.text) {
            console.log(`Successfully generated content using model: ${modelName}`);
            break;
          }
        } catch (err: any) {
          console.warn(`Model ${modelName} failed/unavailable. Error:`, err.message || err);
          lastError = err;
        }
      }

      if (!response || !response.text) {
        throw lastError || new Error("All fallback models failed to generate content.");
      }

      return res.json({ content: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({ error: error.message || "An error occurred with the Gemini API." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
