import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// Set CLIENT_URL to your frontend's URL in production (e.g. https://pradip.vercel.app)
app.use(cors({ origin: process.env.CLIENT_URL || true }));
app.use(express.json({ limit: "20kb" }));

// Reuse the connection between serverless invocations
const cached = globalThis._mongo || (globalThis._mongo = { conn: null, promise: null });
async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not set");
  cached.promise ||= mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}

const Message =
  mongoose.models.Message ||
  mongoose.model(
    "Message",
    new mongoose.Schema(
      {
        name: { type: String, required: true, trim: true, maxlength: 80 },
        email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
        message: { type: String, required: true, trim: true, maxlength: 2000 },
      },
      { timestamps: true }
    )
  );

app.get("/", (_req, res) => res.json({ ok: true, service: "portfolio-api" }));
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (![name, email, message].every((v) => typeof v === "string" && v.trim())) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }
  try {
    await connectDB();
    await Message.create({ name, email, message });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not save your message. Email me directly instead." });
  }
});

export default app;
