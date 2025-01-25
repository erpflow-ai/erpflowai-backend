import { Request, Response } from 'express';
import axios from 'axios';

import { trainingData } from './../../utils/trainingData';

const basePrompt = trainingData
    .map(
        (example) =>
            `### Input: ${example.text_input}\n### Output: ${JSON.stringify(example.output)}\n\n`
    )
    .join("");

export const resolveRequirement = async (req: Request, res: Response) => {
    const { input } = req.body;

    if (!input) {
        return res.status(400).json({ error: "Input is required" });
    }

    const prompt = basePrompt + `### Input: ${input}\n### Output:`;

    try {
        // Make the request to the Google Generative AI API
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GENAI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        // Extract the result
        const result = response.data.candidates[0].content.parts[0].text;
        console.log("answer:", result);

        // Send the result as a JSON response
        res.status(200).json({ message: result });
    } catch (error: any) {
        console.error("Error resolving requirement:", error.response?.data || error.message);
        res.status(500).json({ error: error.response?.data || error.message });
    }
};
