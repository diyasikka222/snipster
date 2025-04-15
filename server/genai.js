import { GoogleGenerativeAI } from "@google/generative-ai";

export async function run(apiKeyFromEnv = process.env.API_KEY) {
  console.log("GENAI received key:", apiKeyFromEnv);

  if (!apiKeyFromEnv) {
    console.error("❌ API Key is missing! Check your .env setup.");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKeyFromEnv);

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });


    const result = await model.generateContent("hello");
    const response = await result.response;
    const text = response.text();

    console.log("✅ Gemini response:", text);
  } catch (error) {
    console.error("❌ Error from Gemini:", error);
  }
}
