import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const HF_API_KEY = process.env.HF_API_KEY;

const promptTemplate = (title: string, category: string) => `
Actúa como un vendedor entusiasta, creativo y muy persuasivo. 
Cada vez que recibas un texto, cámbialo usando sinónimos y reformulaciones para que suene diferente pero mantenga el mismo significado.
Además, agrega emoticones (aleatorios pero naturales) en puntos estratégicos del texto para resaltar emociones o ideas clave.

Tu respuesta debe contener:
- 4 títulos únicos y llamativos, uno por línea.
- 5 textos descriptivos relacionados con el producto, donde:
  • El primero sea una frase corta de una línea.
  • Los siguientes 4 sean de 3 líneas cada uno.
- Un último párrafo invitando a la compra, usando lenguaje persuasivo y emoticones 🚀🔥🛒

Todo debe estar relacionado con el producto: "${title}" de la categoría "${category}".
`;

export async function POST(req: NextRequest) {
  const { title, category } = await req.json();

  if (!title || !category) {
    return NextResponse.json({ error: "Título y categoría son requeridos" }, { status: 400 });
  }

  const prompt = promptTemplate(title, category);

  const fallbackChain = [tryGemini, tryGroq, tryOpenRouter, tryHuggingFace];

  for (const providerFn of fallbackChain) {
    try {
      const text = await providerFn(prompt);
      return procesarTexto(text);
    } catch (err) {
      if (err && typeof err === "object" && "message" in err) {
        console.warn(`⚠️ Falló ${providerFn.name}:`, (err as { message: string }).message);
      } else {
        console.warn(`⚠️ Falló ${providerFn.name}:`, err);
      }
    }
  }

  return NextResponse.json({ error: "Todas las IAs fallaron" }, { status: 500 });
}

// --- Proveedores ---

async function tryGemini(prompt: string): Promise<string> {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: prompt });
  const chatSession = model.startChat({ generationConfig: { temperature: 0.4 }, history: [] });
  const result = await chatSession.sendMessage("Genera el contenido");
  return result.response.text();
}

async function tryGroq(prompt: string): Promise<string> {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.6,
      max_tokens: 2048,
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Respuesta vacía de Groq";
}

async function tryOpenRouter(prompt: string): Promise<string> {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct:nitro",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Respuesta vacía de OpenRouter";
}

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
  if (typeof data === "string") return data;
  if (Array.isArray(data) && data[0]?.generated_text) return data[0].generated_text;
  throw new Error("Respuesta inválida de HuggingFace");
}

// --- Formateo Final ---
function procesarTexto(text: string) {
  const lines = text.split("\n").filter(Boolean);
  const titles = lines.slice(0, 4);
  const texts = lines.slice(4, 9);
  const callToAction = lines.slice(9).join("\n");

  return NextResponse.json({ titles, texts, callToAction });
}
