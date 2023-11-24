import express from "express";
const router = express.Router();

import {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
  deleteAllGoals,
} from "../controllers/goalControllers.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/", protect, setGoal);
router.get("/", protect, getGoals);
router.get("/:id", protect, getGoal);
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);
router.delete("/", protect, deleteAllGoals);

export default router;
