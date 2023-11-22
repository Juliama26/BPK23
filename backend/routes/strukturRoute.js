import express from "express";
import {
  getAllStruktur,
  getStrukturId,
  createStruktur,
  updateStruktur,
  deleteStruktur,
} from "../controllers/contStruktur.js";
import { verify, roleCB } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/struktur", verify, getAllStruktur);
router.get("/struktur/:id", verify, roleCB, getStrukturId);
router.post("/struktur", verify, roleCB, createStruktur);
router.patch("/struktur/:id", verify, roleCB, updateStruktur);
router.delete("/struktur/:id", verify, roleCB, deleteStruktur);

export default router;
