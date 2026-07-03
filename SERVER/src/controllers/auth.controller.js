import bcrypt from "bcrypt";
import User from "../models/public.model.js";
import { genToken } from "../controllers/auth.controller.js";



// Register User
export const RegisterUser = async (req, res, next) => {
    console.log("REGISTER API HIT");
  try {
    const { fullName, email, phone, dob, gender, password } = req.body;

    // Validation
    if (!fullName || !email || !phone || !dob || !gender || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User
    const user = await User.create({
      fullName,
      email,
      phone,
      dob,
      gender,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// Login User
export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }
   
    await genToken(existingUser,res);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      user,
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// Logout User
export const LogoutUser = async (req, res, next) => {
  try {
    // Controller Logic

    res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};