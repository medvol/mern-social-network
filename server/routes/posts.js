import express from "express";
import {
  getAllPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts/index.js";
import { verifyToken, isValidId, ctrlWrapper } from "../middlewares/index.js";

const router = express.Router();

router.get("/", verifyToken, ctrlWrapper(getAllPosts));
router.get("/:id/posts", isValidId, verifyToken, ctrlWrapper(getUserPosts));

router.patch("/:id/like", isValidId, verifyToken, ctrlWrapper(likePost));

export default router;
