import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";
import { run } from './genai.js'; // Import the run function from genai.js

dotenv.config();
connectDB();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

// Add the POST route to handle AI requests
app.post("/genai", async (req, res) => {
  const { prompt } = req.body; // Get prompt from the body of the request

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" }); // Error if no prompt
  }
  console.log("Received prompt:", prompt);

  try {
    const response = await run(prompt); // Call the run function with the prompt
    res.json({ response: response }); // Send back the AI response as JSON
  } catch (error) {
    console.error("Error from Gemini:", error);
    res.status(500).json({ error: "Failed to get response from GenAI" }); // Handle errors
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
