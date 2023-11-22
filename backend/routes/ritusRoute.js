import express from "express";
import {
  getAllRitus,
  getRitusId,
  createRitus,
  updateRitus,
  deleteRitus,
} from "../controllers/contRitus.js";
import { verify, roleOPK } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/ritus", verify, getAllRitus);
router.get("/ritus/:id", verify, roleOPK, getRitusId);
router.post("/ritus", verify, roleOPK, createRitus);
router.patch("/ritus/:id", verify, roleOPK, updateRitus);
router.delete("/ritus/:id", verify, roleOPK, deleteRitus);

export default router;
