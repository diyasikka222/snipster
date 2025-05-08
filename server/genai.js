import OpenAI from 'openai';

// Initialize OpenAI instance with the API key and base URL
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENAI_API_KEY,  // Ensure your API key is set properly in environment variables
  defaultHeaders: {
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional
    'X-Title': '<YOUR_SITE_NAME>', // Optional
  },
});

// Function to handle user prompt and return OpenAI response
export async function run(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo', // Use the valid model ID
      messages: [
        {
          role: 'user',
          content: prompt, // Pass the user prompt dynamically
        },
      ],
    });

    // Log and return the response content
    if (completion.choices && completion.choices.length > 0) {
      const message = completion.choices[0].message.content;
      console.log('OpenAI response:', message);
      return message; // Return the assistant's response
    } else {
      console.log('No valid choices in response');
      return 'No valid response from OpenAI.';
    }
  } catch (error) {
    console.error('Error during OpenAI request:', error);
    return 'There was an error processing your request.';
  }
}

// Example usage: Call the run function with a user prompt
async function main() {
  const userPrompt = 'What is the meaning of life?'; // Example prompt
  const response = await run(userPrompt);
  console.log('Response from OpenAI:', response);
}

main();
