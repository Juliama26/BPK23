import express from "express";
import {
  getAllBenda,
  getBendaId,
  createBenda,
  updateBenda,
  deleteBenda,
} from "../controllers/contBenda.js";
import { verify, roleCB } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/benda", verify, getAllBenda);
router.get("/benda/:id", verify, roleCB, getBendaId);
router.post("/benda", verify, roleCB, createBenda);
router.patch("/benda/:id", verify, roleCB, updateBenda);
router.delete("/benda/:id", verify, roleCB, deleteBenda);

export default router;
