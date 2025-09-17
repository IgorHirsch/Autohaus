const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

// Erst versuchen, .env im Projekt zu laden, sonst weiter hoch
const localEnvPath = path.join(__dirname, ".env");
const parentEnvPath = path.join(__dirname, "../.env");
const autohausEnvPath = path.join(__dirname, "../../.env"); // ✅ dein Fall

if (fs.existsSync(localEnvPath)) {
  require("dotenv").config({ path: localEnvPath });
  console.log("🔑 .env geladen aus:", localEnvPath);
} else if (fs.existsSync(parentEnvPath)) {
  require("dotenv").config({ path: parentEnvPath });
  console.log("🔑 .env geladen aus:", parentEnvPath);
} else if (fs.existsSync(autohausEnvPath)) {
  require("dotenv").config({ path: autohausEnvPath });
  console.log("🔑 .env geladen aus:", autohausEnvPath);
} else {
  console.warn("⚠️  Keine .env-Datei gefunden!");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("API Key loaded?", !!process.env.OPENAI_API_KEY);

// Lies die Info-Datei einmal beim Start
const autohausInfo = fs.readFileSync(
  path.join(__dirname, "autohaus-info.txt"),
  "utf8"
);

async function getResponse(userInput) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: autohausInfo },
        { role: "user", content: userInput },
      ],
    });
    return (
      response.choices[0].message?.content?.trim() || "Keine Antwort erhalten."
    );
  } catch (error) {
    console.error("OpenAI API Error:", error.response?.data || error.message);
    throw new Error("Failed to get response from chatbot");
  }
}

module.exports = { getResponse };
