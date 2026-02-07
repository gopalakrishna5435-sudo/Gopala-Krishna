
import { GoogleGenAI, Type } from "@google/genai";

// Strictly following initialization guidelines: always use {apiKey: process.env.API_KEY} 
// and creating fresh instance inside functions to handle latest key availability.

export const detectPest = async (imageBase64: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Identify the crop disease or pest in this image. 
  Since this is for an organic farm, provide ONLY natural, non-chemical remedies. 
  Structure the response as JSON with: 
  - "diagnosis": Name of pest/disease
  - "confidence": percentage
  - "naturalRemedies": string array of organic solutions
  - "preventativeAdvice": string
  - "urgency": "Low" | "Medium" | "High"`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: imageBase64 } },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnosis: { type: Type.STRING },
            confidence: { type: Type.STRING },
            naturalRemedies: { type: Type.ARRAY, items: { type: Type.STRING } },
            preventativeAdvice: { type: Type.STRING },
            urgency: { type: Type.STRING }
          }
        }
      }
    });

    // Accessing .text as a property as per guidelines
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("AI Diagnostic Error:", error);
    throw error;
  }
};

export const translateUI = async (text: string, targetLang: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Translate the following text into ${targetLang}. Preserve any placeholders or formatting. 
  Text: "${text}"`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt
    });
    // Accessing .text as a property as per guidelines
    return response.text.trim();
  } catch (error) {
    return text; // Fallback
  }
};
