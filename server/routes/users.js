import express from "express";
import {
  getUser,
  addFriend,
  getCurrent,
  deleteFriend,
  recommendedUsers
} from "../controllers/users/index.js";
import { verifyToken, isValidId, ctrlWrapper } from "../middlewares/index.js";

const router = express.Router();

router.get("/current", verifyToken, ctrlWrapper(getCurrent));

router.get("/:id", isValidId, verifyToken, ctrlWrapper(getUser));

router.patch("/:id/:friendId", isValidId, verifyToken, ctrlWrapper(addFriend));

router.delete(
  "/:id/:friendId",
  isValidId,
  verifyToken,
  ctrlWrapper(deleteFriend)
);

router.get("/recomended", isValidId, verifyToken, ctrlWrapper(recommendedUsers))

export default router;
