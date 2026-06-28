import express from "express";
import { ContactUsForm } from "../controllers/user.controller";



const router = express.Router();


router.post("/contact-us",ContactUsForm);

export default router;
