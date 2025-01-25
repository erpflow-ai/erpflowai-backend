import { Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
// import { v4 as uuidv4 } from 'uuid';
import FormData from 'form-data';

export const parseBase64ToWav = async (req: Request, res: Response) => {
    const { base64String } = req.body;
    console.log('Received base64 string:', base64String);

    if (!base64String) {
        return res.status(400).json({ error: "Base64 string is required" });
    }

    // Decode the base64 string to binary data
    const audioBuffer = Buffer.from(base64String, 'base64');

    // Generate a unique filename for the temporary .wav file
    const tempFileName = `temp.wav`;
    const tempFilePath = path.join(__dirname, tempFileName);

    try {
        // Write the buffer to a .wav file
        fs.writeFileSync(tempFilePath, audioBuffer);
        console.log(`Temporary file created: ${tempFilePath}`);

        // Prepare the file for the API request
        const formData = new FormData();
        formData.append('audio_file', fs.createReadStream(tempFilePath));

        // Send the file to the ASR API
        const response = await axios.post(
            'http://localhost:9000/asr', {'audio_file': fs.createReadStream(tempFilePath)},
        );

        // Extract the result
        const result = response.data;
        console.log('Response from ASR API:', result);

        // Send the result as a JSON response
        res.status(200).json({ message: result });
    } catch (error: any) {
        console.error('Error processing audio request:', error.response?.data || error.message);
        res.status(500).json({ error: error.response?.data || error.message });
    } finally {
        // Clean up the temporary file
        if (fs.existsSync(tempFilePath)) {
            // fs.unlinkSync(tempFilePath);
            console.log(`Temporary file deleted: ${tempFilePath}`);
        }
    }
};
