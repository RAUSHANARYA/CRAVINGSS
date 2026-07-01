import dotenv from "dotenv";
dotenv.config();



import express from "express";
import connectDB from "./src/config/db.js";

import AuthRouter from "./src/routes/auth.route.js";
import PublicRouter from "./src/routes/public.route.js";

import morgan from "morgan";
import cors from "cors";



const app = express();

// morgan and cors 
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(morgan("dev"));


// Routes
app.use("/auth", AuthRouter);      // Register, Login, Logout
app.use("/public", PublicRouter);  // Public Routes


// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is Running",
  });
});

// Connect MongoDB and Start Server
// Connect MongoDB and Start Server
const PORT = process.env.PORT || 4500;

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  try {
    await connectDB();
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
});