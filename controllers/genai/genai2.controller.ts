/* @ts-ignore */
import fs from "fs";
import path from "path";
const axios = require('axios')
import { Request, Response } from "express";

const dirname = __dirname;

export const voiceInput = async (req: Request, res: Response): Promise<void> => {
  try {
    const { base64 }: { base64?: string } = req.body
    if (!base64) {
      res.status(400).json({ error: "No base64 audio string provided." });
      return;
    }

    let audioFile = base64.slice(base64.indexOf(",") + 1);

    const padding = audioFile.length % 4;
    if (padding > 0) {
      audioFile += "=".repeat(4 - padding);
    }
    const decodedBuffer = Buffer.from(audioFile, "base64");
    const audioPath = path.join(dirname, "audiofrombase64.wav");
    fs.writeFileSync(audioPath, decodedBuffer);

    const response = await axios.get('http://localhost:10000/transcribe');

    const response2 = await axios.post('http://localhost:8000/gen/construct', { input: response.data.transcription });
    console.log(response.data, response2.data)
    res.status(200).json(response2.data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error instanceof Error ? error.message : "An unknown error occurred" });
  }
};