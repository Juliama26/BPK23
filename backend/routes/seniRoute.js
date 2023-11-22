import express from "express";
import {
  getAllSeni,
  getSeniId,
  createSeni,
  updateSeni,
  deleteSeni,
} from "../controllers/contSeni.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/seni", verify, getAllSeni);
router.get("/seni/:id", verify, roleOPK, getSeniId);
router.post("/seni", verify, roleOPK, createSeni);
router.patch("/seni/:id", verify, roleOPK, updateSeni);
router.delete("/seni/:id", verify, roleOPK, deleteSeni);

export default router;
