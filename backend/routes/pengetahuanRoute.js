import express from "express";
import {
  getAllPengetahuan,
  getPengetahuanId,
  createPengetahuan,
  updatePengetahuan,
  deletePengetahuan,
} from "../controllers/contPengetahuan.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/pengetahuan", verify, getAllPengetahuan);
router.get("/pengetahuan/:id", verify, roleOPK, getPengetahuanId);
router.post("/pengetahuan", verify, roleOPK, createPengetahuan);
router.patch("/pengetahuan/:id", verify, roleOPK, updatePengetahuan);
router.delete("/pengetahuan/:id", verify, roleOPK, deletePengetahuan);

export default router;
