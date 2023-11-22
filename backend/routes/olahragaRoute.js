import express from "express";
import {
  getAllOlahraga,
  getOlahragaId,
  createOlahraga,
  updateOlahraga,
  deleteOlahraga,
} from "../controllers/contOlahraga.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/olahraga", verify, getAllOlahraga);
router.get("/olahraga/:id", verify, roleOPK, getOlahragaId);
router.post("/olahraga", verify, roleOPK, createOlahraga);
router.patch("/olahraga/:id", verify, roleOPK, updateOlahraga);
router.delete("/olahraga/:id", verify, roleOPK, deleteOlahraga);

export default router;
