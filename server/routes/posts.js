import express from "express";
import {
  getAllPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts/index.js";
import { verifyToken, isValidId } from "../middlewares/index.js";

const router = express.Router();

router.get("/", verifyToken, getAllPosts);
router.get("/:userId/posts", isValidId, verifyToken, getUserPosts);

router.patch("/:id/like", isValidId, verifyToken, likePost);

export default router;
