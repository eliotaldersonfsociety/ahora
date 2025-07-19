import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const HF_API_KEY = process.env.HF_API_KEY;

if (!GEMINI_API_KEY || !GROQ_API_KEY || !OPENROUTER_API_KEY || !HF_API_KEY) {
  throw new Error("Faltan una o más variables de entorno necesarias");
}

const systemInstruction = `Actúa como un vendedor persuasivo que cambia las palabras por sinónimos cada vez que se envíe el texto.
Además, agrega emoticones en lugares naturales en el texto, como para expresar emociones o enfatizar ciertos puntos.
Utiliza una variedad de emoticones de manera aleatoria para cada mensaje.`;

/**
 * API Route en Next.js para generar descripciones de productos con fallback entre Gemini, Groq, OpenRouter y HuggingFace
 */
export async function POST(req: NextRequest) {
  try {
    const { title, category } = await req.json();

    if (!title || !category) {
      return NextResponse.json({ error: "Título y categoría son requeridos" }, { status: 400 });
    }

    console.log("📩 Recibido en API:", { title, category });

    const prompt = `Genera una descripción atractiva y en español para un producto llamado "${title}" que pertenece a la categoría "${category}". La descripción debe ser persuasiva y destacar sus características.`;

    const description = await fallbackGenerate(prompt, systemInstruction);

    return NextResponse.json({ description });
  } catch (error) {
    console.error("❌ Error interno del servidor:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// 🚨 Manejador de fallback entre múltiples IAs
async function fallbackGenerate(prompt: string, systemInstruction: string): Promise<string> {
  const providers = [tryGemini, tryGroq, tryOpenRouter, tryHuggingFace];

  for (const providerFn of providers) {
    try {
      const result = await providerFn(prompt, systemInstruction);
      if (result) return result;
    } catch (err) {
      if (err instanceof Error) {
        console.warn(`⚠️ Fallback: falló ${providerFn.name}`, err.message);
      } else {
        console.warn(`⚠️ Fallback: falló ${providerFn.name}`, err);
      }
    }
  }

  throw new Error("Todas las IAs fallaron");
}

// 🎯 GEMINI
async function tryGemini(prompt: string, systemInstruction: string): Promise<string> {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction,
  });

  const chatSession = model.startChat({
    generationConfig: {
      temperature: 0.1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log("✅ Gemini respondió");
  return result.response.text();
}

// 🎯 GROQ
async function tryGroq(prompt: string): Promise<string> {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: prompt },
      ],
      temperature: 0.6,
      max_tokens: 2048,
    }),
  });

  const data = await response.json();
  console.log("✅ Groq respondió");
  return data.choices?.[0]?.message?.content || "Respuesta vacía de Groq";
}

// 🎯 OpenRouter
async function tryOpenRouter(prompt: string): Promise<string> {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct:nitro",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: prompt },
      ],
    }),
  });

  const data = await response.json();
  console.log("✅ OpenRouter respondió");
  return data.choices?.[0]?.message?.content || "Respuesta vacía de OpenRouter";
}

// 🎯 HuggingFace
async function tryHuggingFace(prompt: string): Promise<string> {
  const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  const data = await response.json();
  console.log("✅ HuggingFace respondió");

  if (typeof data === "string") return data;
  if (Array.isArray(data) && data[0]?.generated_text) return data[0].generated_text;
  throw new Error("Respuesta inválida de HuggingFace");
}
