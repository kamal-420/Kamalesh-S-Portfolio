import { GoogleGenAI } from "@google/genai";
import { buildSystemInstruction, generateSmartFallback } from "../../server/portfolioContext.ts";

/**
 * Netlify Serverless Function: POST /api/chat
 *
 * Security:
 * - Reads GEMINI_API_KEY exclusively from process.env.GEMINI_API_KEY.
 * - Absolutely zero hard-coded API keys, tokens, or fallback secrets.
 * - Never prints or exposes the API key in logs or responses.
 */

const getAI = (): GoogleGenAI | null => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || typeof apiKey !== "string" || !apiKey.trim()) {
    return null;
  }
  try {
    return new GoogleGenAI({
      apiKey: apiKey.trim(),
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build-netlify",
        },
      },
    });
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client in Netlify function");
    return null;
  }
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
};

export const handler = async (event: any) => {
  // CORS Preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "",
    };
  }

  // Health / Probe check
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        status: "ok",
        service: "k-bot-netlify-function",
        timestamp: new Date().toISOString(),
      }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ error: "Method Not Allowed. Use POST." }),
    };
  }

  try {
    let body: any = null;
    if (event.body) {
      const rawBody = event.isBase64Encoded
        ? Buffer.from(event.body, "base64").toString("utf-8")
        : event.body;
      try {
        body = JSON.parse(rawBody);
      } catch {
        return {
          statusCode: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ error: "Invalid JSON payload provided." }),
        };
      }
    }

    const messages = body?.messages;
    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ error: "Invalid request. 'messages' must be an array of objects." }),
      };
    }

    const validMessages = messages.filter(
      (m: any) => m && typeof m.content === "string" && m.content.trim().length > 0
    );

    if (validMessages.length === 0) {
      return {
        statusCode: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ error: "No valid message content provided." }),
      };
    }

    const latestUserQuery = validMessages[validMessages.length - 1]?.content || "";
    const systemInstruction = buildSystemInstruction();

    // Map conversation for Gemini
    let contents = validMessages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content.trim() }],
    }));

    // First turn for Gemini must be 'user'
    while (contents.length > 0 && contents[0].role === "model") {
      contents.shift();
    }

    if (contents.length === 0) {
      contents = [{ role: "user", parts: [{ text: latestUserQuery }] }];
    }

    let responseText: string | null = null;
    const ai = getAI();

    if (ai) {
      let timer: any;
      const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("Gemini timeout in Netlify function")), 8500);
      });

      try {
        const resAI: any = await Promise.race([
          ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
            },
          }),
          timeoutPromise,
        ]);
        clearTimeout(timer);

        if (resAI && resAI.text && resAI.text.trim().length > 0) {
          responseText = resAI.text.trim();
        }
      } catch {
        clearTimeout(timer);
      }
    }

    // High-accuracy portfolio knowledge engine fallback
    if (!responseText) {
      responseText = generateSmartFallback(latestUserQuery);
    }

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        content: responseText,
      }),
    };
  } catch {
    const fallbackText =
      "Hello! I am K-Bot. Kamalesh S is a B.Tech IT scholar specializing in Real-Time Systems Monitoring, Cloud Infrastructure, and IT Support. Feel free to ask about his projects, skills, certifications, or resume!";
    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        content: fallbackText,
      }),
    };
  }
};
