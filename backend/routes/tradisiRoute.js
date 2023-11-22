import express from "express";
import {
  getAllTradisi,
  getTradisiId,
  createTradisi,
  updateTradisi,
  deleteTradisi,
} from "../controllers/contTradisi.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/tradisi", verify, getAllTradisi);
router.get("/tradisi/:id", verify, roleOPK, getTradisiId);
router.post("/tradisi", verify, roleOPK, createTradisi);
router.patch("/tradisi/:id", verify, roleOPK, updateTradisi);
router.delete("/tradisi/:id", verify, roleOPK, deleteTradisi);

export default router;
