import express from "express";
import {
  getAllUser,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { verify, adminOnly } from "../middleware/middleUser.js";

const router = express.Router();
router.get("/user", verify, adminOnly, getAllUser);
router.get("/user/:id", verify, adminOnly, getUserId);
router.post("/user", verify, adminOnly, createUser);
router.patch("/user/:id", verify, adminOnly, updateUser);
router.delete("/user/:id", verify, adminOnly, deleteUser);

export default router;
