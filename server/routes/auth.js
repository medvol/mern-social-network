import express from "express";
import { login, logout } from "../controllers/auth/index.js";
import {
  verifyToken,
  ctrlWrapper,
  validateBody,
} from "../middlewares/index.js";
import { loginSchema } from "../models/User.js";

const router = express.Router();

router.post("/login", validateBody(loginSchema), ctrlWrapper(login));
router.post("/logout", verifyToken, ctrlWrapper(logout));

export default router;
