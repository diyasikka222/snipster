import { GoogleGenerativeAI } from "@google/generative-ai";

export async function run(prompt, apiKeyFromEnv = process.env.API_KEY) {
  console.log("GENAI received key:", apiKeyFromEnv);

  if (!apiKeyFromEnv) {
    console.error("❌ API Key is missing! Check your .env setup.");
    throw new Error("API Key is missing!"); // Throw error if API key is missing
  }

  const genAI = new GoogleGenerativeAI(apiKeyFromEnv);

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

    // Generate content using the provided prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text(); // Extract the response text from Gemini

    console.log("✅ Gemini response:", text);
    return text; // Return the AI's response text
  } catch (error) {
    console.error("❌ Error from Gemini:", error);
    throw error; // Propagate the error to be handled by the caller
  }
}
