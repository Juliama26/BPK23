import express from "express";
import {
  getAllAdat,
  getAdatId,
  createAdat,
  updateAdat,
  deleteAdat,
} from "../controllers/contAdat.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/adat", verify, getAllAdat);
router.get("/adat/:id", verify, roleOPK, getAdatId);
router.post("/adat", verify, roleOPK, createAdat);
router.patch("/adat/:id", verify, roleOPK, updateAdat);
router.delete("/adat/:id", verify, roleOPK, deleteAdat);

export default router;
