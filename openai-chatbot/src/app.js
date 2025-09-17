const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getResponse } = require("./chatbot");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const reply = await getResponse(message);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: "Chatbot antwortet nicht." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`App.js - Server is running on http://localhost:${PORT}`);
});
