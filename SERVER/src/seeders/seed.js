import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";

import adminSeed from "./admin.seed.js";
import userSeed from "./user.seed.js";

const Seed = async () => {
  try {

    await connectDB();

    await adminSeed();

    await userSeed();

    console.log("✅ Database Seed Completed");

  } catch (error) {

    console.log(error.message);

  } finally {

    process.exit(1);

  }
};

Seed();