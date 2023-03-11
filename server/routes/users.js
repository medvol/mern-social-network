import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getCurrent,
} from "../controllers/users/index.js";
import { verifyToken, isValidId, ctrlWrapper } from "../middlewares/index.js";

const router = express.Router();

router.get("/current", verifyToken, ctrlWrapper(getCurrent));

router.get("/:id", isValidId, verifyToken, ctrlWrapper(getUser));

router.get("/:id/friends", isValidId, verifyToken, ctrlWrapper(getUserFriends));

router.patch(
  "/:id/:friendId",
  isValidId,
  verifyToken,
  ctrlWrapper(addRemoveFriend)
);

export default router;
