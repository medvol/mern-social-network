import express from "express";
import { login, logout } from "../controllers/auth/index.js";
import { verifyToken, ctrlWrapper } from "../middlewares/index.js";

const router = express.Router();

router.post("/login", ctrlWrapper(login));
router.post("/logout", verifyToken, ctrlWrapper(logout));

export default router;
