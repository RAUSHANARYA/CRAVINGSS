import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is Running ",
    });
});

// Connect MongoDB and Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);

    try {
        await connectDB();
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection Failed");
        console.log(error.message);
    }
});