import dotenv from "dotenv";
dotenv.config();



import express from "express";
import connectDB from "./src/config/db.js";

import AuthRouter from "./src/routes/auth.route.js";
import PublicRouter from "./src/routes/public.route.js";

import morgan from "morgan";
import cors from "cors";

import cookieParser from "cookie-parser";
import UserRouter from "./src/routes/user.route.js";

import cloudinary from "./src/config/cloudinary.config.js";



const app = express();

// morgan and cors 
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));


// Routes
app.use("/auth", AuthRouter);      // Register, Login, Logout
app.use("/public", PublicRouter);  // Public Routes
app.use("/user", UserRouter);



// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is Running",
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
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

  const result = await cloudinary.api.ping();
  console.log("Cloudinary Connected");
  console.log(result);

} catch (error) {
  console.log(error.message);
}
});