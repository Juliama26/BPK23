import express from "express";
import {
  getAllTeknologi,
  getTeknologiId,
  createTeknologi,
  updateTeknologi,
  deleteTeknologi,
} from "../controllers/contTeknologi.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/teknologi", verify, getAllTeknologi);
router.get("/teknologi/:id", verify, roleOPK, getTeknologiId);
router.post("/teknologi", verify, roleOPK, createTeknologi);
router.patch("/teknologi/:id", verify, roleOPK, updateTeknologi);
router.delete("/teknologi/:id", verify, roleOPK, deleteTeknologi);

export default router;
