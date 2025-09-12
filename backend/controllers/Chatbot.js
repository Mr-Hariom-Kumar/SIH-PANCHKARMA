import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEM_API);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const chatbot = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
       const prompt = `
You are a helpful, friendly, and knowledgeable chatbot. 
Your role:
- Assist users with general questions about daily life, health, and wellness.  
- Provide supportive guidance for Panchakarma, Ayurveda, and holistic healing.  
- Be compassionate and approachable, like a trusted guide.  
- If unsure, politely admit it instead of guessing.  

Formatting rules:  
- Keep answers **concise and structured**.  
- Use short **paragraphs** or **bullet points** where possible.  
- Avoid overwhelming users with too much detail at once.  

User query: ${message}
`;

        const result = await model.generateContent(prompt);

        // Safely extract response text
        const rawResponse = typeof result.response.text === "function"
            ? result.response.text()
            : result.response.text || result.response;

        console.log("Raw API Response:", rawResponse);

        // Send the raw response back to the client
        res.status(200).json({ response: rawResponse });
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({
            message: "Failed to generate response",
            error: error.message,
        });
    }
};