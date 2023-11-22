import express from "express";
import {
  getAllKawasan,
  getKawasanId,
  createKawasan,
  updateKawasan,
  deleteKawasan,
} from "../controllers/contKawasan.js";
import { verify, roleCB } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/kawasan", verify, getAllKawasan);
router.get("/kawasan/:id", verify, roleCB, getKawasanId);
router.post("/kawasan", verify, roleCB, createKawasan);
router.patch("/kawasan/:id", verify, roleCB, updateKawasan);
router.delete("/kawasan/:id", verify, roleCB, deleteKawasan);

export default router;
