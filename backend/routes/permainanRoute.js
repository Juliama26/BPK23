import express from "express";
import {
  getAllPermainan,
  getPermainanId,
  createPermainan,
  updatePermainan,
  deletePermainan,
} from "../controllers/contPermainan.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/permainan", verify, getAllPermainan);
router.get("/permainan/:id", verify, roleOPK, getPermainanId);
router.post("/permainan", verify, roleOPK, createPermainan);
router.patch("/permainan/:id", verify, roleOPK, updatePermainan);
router.delete("/permainan/:id", verify, roleOPK, deletePermainan);

export default router;
