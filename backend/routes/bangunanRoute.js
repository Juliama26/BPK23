import express from "express";
import {
  getAllBangunan,
  getBangunanId,
  createBangunan,
  updateBangunan,
  deleteBangunan,
} from "../controllers/contBangunan.js";
import { verify, roleCB } from "../middleware/middleUser.js";
const router = express.Router();

router.get("/bangunan", verify, getAllBangunan);
router.get("/bangunan/:id", verify, roleCB, getBangunanId);
router.post("/bangunan", verify, roleCB, createBangunan);
router.patch("/bangunan/:id", verify, roleCB, updateBangunan);
router.delete("/bangunan/:id", verify, roleCB, deleteBangunan);

export default router;
