import express from "express";
import authMiddleWare from "../MiddleWare/AuthMiddleWare.js";

import {
  deleteUser,
  followUser,
  getUser,
  UnfollowUser,
  updateUser,
  getAllUser,
} from "../Controllers/UserController.js";

const router = express.Router();
router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, UnfollowUser);
export default router;
