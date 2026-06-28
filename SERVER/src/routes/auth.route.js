import express from "express";
import { LoginUser, RegisterUser ,LogoutUser} from "../controllers/auth.controller";


const router = express.Router();


router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.get("/Logout",LogoutUser);

export default router;