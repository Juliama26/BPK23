import express from "express";
import {
  getAllBahasa,
  getBahasaId,
  createBahasa,
  updateBahasa,
  deleteBahasa,
} from "../controllers/contBahasa.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/bahasa", verify, getAllBahasa);
router.get("/bahasa/:id", verify, roleOPK, getBahasaId);
router.post("/bahasa", verify, roleOPK, createBahasa);
router.patch("/bahasa/:id", verify, roleOPK, updateBahasa);
router.delete("/bahasa/:id", verify, roleOPK, deleteBahasa);

export default router;
