import express from "express";
import { ctrlWrapper } from "../middlewares/index.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users/index.js";
import { verifyToken } from "../middlewares/index.js";

const router = express.Router();


router.get("/:id", verifyToken, ctrlWrapper(getUser));
router.get("/:id/friends", verifyToken, ctrlWrapper(getUserFriends));


router.patch("/:id/:friendId", verifyToken, ctrlWrapper(addRemoveFriend));

export default router;
