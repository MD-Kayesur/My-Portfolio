// // server.js
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// app.post('/ask-ai', async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) return res.status(400).send({ error: "Prompt is required" });

//   try {
//     const result = await model.generateContent(prompt);
//     const response = result.response;
//     const text = response.text();

//     res.send({ reply: text });
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     res.status(500).send({ error: "AI request failed" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
