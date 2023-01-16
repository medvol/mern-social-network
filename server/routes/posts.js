import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts/index.js";
import { verifyToken, isValidId } from "../middlewares/index.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", isValidId, verifyToken, getUserPosts);

router.patch("/:id/like", isValidId, verifyToken, likePost);

export default router;
