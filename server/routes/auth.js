import express from "express";
import { login } from "../controllers/auth/index.js";
import { ctrlWrapper } from "../middlewares/index.js";

const router = express.Router();

router.post("/login", ctrlWrapper(login));

export default router;
