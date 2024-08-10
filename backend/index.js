import express from "express";
import { connectDB } from "./db/connnectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
