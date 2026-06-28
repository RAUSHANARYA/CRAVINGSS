import User from "../models/public.model.js";

// Register User
export const RegisterUser = async (req, res, next) => {
  try {
    // Controller Logic

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// Login User
export const LoginUser = async (req, res, next) => {
  try {
    // Controller Logic

    res.status(200).json({
      success: true,
      message: "Login Successfully",
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