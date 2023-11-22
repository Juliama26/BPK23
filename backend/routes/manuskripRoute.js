import express from "express";
import {
  getAllManuskrip,
  getManuskripId,
  createManuskrip,
  updateManuskrip,
  deleteManuskrip,
} from "../controllers/contManuskrip.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/manuskrip", verify, getAllManuskrip);
router.get("/manuskrip/:id", verify, roleOPK, getManuskripId);
router.post("/manuskrip", verify, roleOPK, createManuskrip);
router.patch("/manuskrip/:id", verify, roleOPK, updateManuskrip);
router.delete("/manuskrip/:id", verify, roleOPK, deleteManuskrip);

export default router;
