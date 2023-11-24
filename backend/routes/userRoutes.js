import express from "express";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

import {
  authUser,
  regiterUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  logutUser,
  getUsers,
  deleteAllUserProfile,
} from "../controllers/userControllers.js";

router.post("/users/register/user", regiterUser);
router.post("/users/login", authUser);
router.post("/users/logoutuser", logutUser);
router.get("/users/profile", protect, getUserProfile);
router.get("/users", getUsers);
router.put("/users/updateuser", protect, updateUserProfile);
router.delete("/users/deleteuser", protect, deleteUserProfile);
router.delete("/users/deleteuser/all", deleteAllUserProfile);

export default router;
