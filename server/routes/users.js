import express from "express";
import { ctrlWrapper } from "../middlewares/index.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users/index.js";
import { verifyToken, isValidId } from "../middlewares/index.js";

const router = express.Router();

router.get("/:id", isValidId, verifyToken, ctrlWrapper(getUser));
router.get("/:id/friends", isValidId, verifyToken, ctrlWrapper(getUserFriends));

router.patch(
  "/:id/:friendId",
  isValidId,
  verifyToken,
  ctrlWrapper(addRemoveFriend)
);

export default router;
