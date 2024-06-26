import express, { response } from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from PixelAI dalle route");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url",
    });

    const image = aiResponse.data.data[0].url;
    console.log(image);
    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;

// sk-proj-FL6Nw50fbCvJiR4Iw1ddT3BlbkFJwpvFtCJ6yAMJHLAoWvSR
