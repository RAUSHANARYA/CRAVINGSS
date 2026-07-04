import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const AuthProtect = async (req, res, next) => {
  try {

    const token = req.cookies.Oreo;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Session Expired",
      });
    }

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const verifyUser = await User.findById(decode.id);

    if (!verifyUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid User",
      });
    }

    req.user = verifyUser;

    next();

  } catch (error) {
    next(error);
  }
};