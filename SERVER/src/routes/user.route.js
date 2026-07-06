import express from "express";
import multer from "multer";

import { EditUserProfile } from "../controllers/user.controller.js";
import { AuthProtect } from "../middlewares/auth.middleware.js";

const router = express.Router();

const upload = multer();

router.put(
  "/edit-profile",
  AuthProtect,
  upload.single("displayPic"),
  EditUserProfile
);

export default router;