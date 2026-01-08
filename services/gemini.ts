
import { GoogleGenAI } from "@google/genai";

export async function chatWithAI(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are Cyber-Sathi, a helpful professional career assistant for Margdarshak, a portal for Sri Chaitanya Global Vista students. 
        Your tone is professional, encouraging, and clear. 
        Focus on providing practical career advice, internship suggestions, and resume tips.
        Keep your responses readable and well-structured.`,
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("AI Sync Error:", error);
    return "I'm sorry, I encountered an error. Please try again in a moment.";
  }
}
