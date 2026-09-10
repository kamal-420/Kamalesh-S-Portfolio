import express from "express";
import http from "http";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import { buildSystemInstruction, generateSmartFallback } from "./server/portfolioContext.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const server = http.createServer(app);

  // Health check endpoints for deployment probes & container readiness (checked first)
  app.get(["/api/health", "/healthz", "/_ah/health"], (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

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

  // API endpoint for chatbot (supports both SSE Streaming and structured JSON)
  app.post("/api/chat", async (req, res) => {
    const isSseRequested = req.headers.accept?.includes("text/event-stream");

    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request. 'messages' must be an array of objects." });
      }

      // Filter to only non-empty valid messages
      const validMessages = messages.filter(
        (m: any) => m && typeof m.content === "string" && m.content.trim().length > 0
      );

      if (validMessages.length === 0) {
        return res.status(400).json({ error: "No valid message content provided." });
      }

      const ai = getAI();

      // Format messages into Gemini conversation format
      // Gemini contents must start with a 'user' turn
      let contents = validMessages.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content.trim() }]
      }));

      // Strip leading model greetings so the first turn is always 'user'
      while (contents.length > 0 && contents[0].role === "model") {
        contents.shift();
      }

      // If only assistant greetings were present, synthesize a prompt from the latest message
      if (contents.length === 0) {
        contents = [{ role: "user", parts: [{ text: validMessages[validMessages.length - 1].content.trim() }] }];
      }

      const systemInstruction = buildSystemInstruction();
      const latestUserQuery = validMessages[validMessages.length - 1]?.content || "";

      // ----------------------------------------------------
      // PATH A: Server-Sent Events (SSE) Streaming
      // ----------------------------------------------------
      if (isSseRequested) {
        res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        res.setHeader("X-Accel-Buffering", "no");
        if (typeof (res as any).flushHeaders === "function") {
          (res as any).flushHeaders();
        }

        let streamSucceeded = false;

        if (ai) {
          try {
            const stream = await ai.models.generateContentStream({
              model: "gemini-2.5-flash",
              contents: contents,
              config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
              }
            });

            for await (const chunk of stream) {
              if (chunk.text && chunk.text.length > 0) {
                res.write(`data: ${JSON.stringify({ chunk: chunk.text })}\n\n`);
                streamSucceeded = true;
              }
            }
          } catch (streamErr: any) {
            console.warn("SSE Gemini stream encountered error, falling back to smart knowledge base:", streamErr?.message || streamErr);
          }
        }

        // If streaming didn't produce tokens, stream the intelligent knowledge fallback
        if (!streamSucceeded) {
          const fallback = generateSmartFallback(latestUserQuery);
          res.write(`data: ${JSON.stringify({ chunk: fallback })}\n\n`);
        }

        res.write("data: [DONE]\n\n");
        return res.end();
      }

      // ----------------------------------------------------
      // PATH B: Standard Structured JSON Response
      // ----------------------------------------------------
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      let responseText: string | null = null;

      if (ai) {
        let timer: any;
        const timeoutPromise = new Promise((_, reject) => {
          timer = setTimeout(() => reject(new Error("Gemini timeout")), 7000);
        });

        try {
          const resAI: any = await Promise.race([
            ai.models.generateContent({
              model: "gemini-2.5-flash",
              contents: contents,
              config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
              }
            }),
            timeoutPromise
          ]);
          clearTimeout(timer);
          if (resAI && resAI.text && resAI.text.trim().length > 0) {
            responseText = resAI.text.trim();
          }
        } catch (err: any) {
          clearTimeout(timer);
          console.warn("Gemini generateContent timed out or skipped:", err?.message || err);
        }
      }

      if (responseText) {
        return res.json({ content: responseText });
      }

      const fallbackText = generateSmartFallback(latestUserQuery);
      return res.json({ content: fallbackText });

    } catch (error: any) {
      console.error("Chatbot processing error:", error);
      if (isSseRequested && !res.headersSent) {
        res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
        res.write(`data: ${JSON.stringify({ chunk: "Hello! I am K-Bot, Kamalesh S's assistant. How can I help you explore his portfolio?" })}\n\n`);
        res.write("data: [DONE]\n\n");
        return res.end();
      }
      return res.status(200).json({ 
        content: "Hello! I am K-Bot. Kamalesh is a B.Tech IT scholar specialized in Systems Monitoring, Cloud Infrastructure, and IT Support. Please explore his portfolio sections or reach him directly at kamaleshsekar9487@gmail.com." 
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

      // Also sync to dist/ if it exists (e.g. running compiled production server)
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        try {
          fs.writeFileSync(path.join(distDir, 'kamalesh_photo.jpg'), buffer);
        } catch {
          // Ignore dist write errors in dev mode
        }
      }
      
      res.json({ success: true, url: '/kamalesh_photo.jpg?t=' + Date.now() });
    } catch (err: any) {
      console.error("Error saving uploaded photo:", err);
      res.status(500).json({ error: err.message || "Failed to save photo" });
    }
  });

  // Vite middleware for development with full HMR WebSocket integration
  if (process.env.NODE_ENV !== "production") {
    // Dynamically load Vite only in development to prevent module resolution errors in production containers
    const { createServer: createViteServer } = await import("vite");
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
    // Production: serve built static files from dist
    const distPath = fs.existsSync(path.join(__dirname, 'index.html'))
      ? __dirname
      : path.join(process.cwd(), 'dist');

    app.use(express.static(distPath));

    // Handle unknown API routes with JSON 404 before SPA fallback
    app.all('/api/*all', (req, res) => {
      res.status(404).json({ error: "API route not found" });
    });

    // SPA fallback: send index.html for all other routes
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
