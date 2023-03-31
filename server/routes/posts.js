import express from "express";
import {
  getAllPosts,
  getUserPosts,
  likePost,
  createPost,
} from "../controllers/posts/index.js";
import { verifyToken, isValidId, ctrlWrapper, upload } from "../middlewares/index.js";

const router = express.Router();

router.get("/", verifyToken, ctrlWrapper(getAllPosts));

router.post(
  "/",
  verifyToken,
  upload.single("picture"),
  ctrlWrapper(createPost)
);

router.get("/:id/posts", verifyToken, isValidId, ctrlWrapper(getUserPosts));

router.patch("/:id/like", verifyToken, isValidId, ctrlWrapper(likePost));

export default router;
