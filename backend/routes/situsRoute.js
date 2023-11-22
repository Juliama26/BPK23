import express from "express";
import {
  getAllSitus,
  getSitusId,
  createSitus,
  updateSitus,
  deleteSitus,
} from "../controllers/contSitus.js";
import { verify, roleCB } from "../middleware/middleUser.js";

const router = express.Router();

router.get("/situs", verify, getAllSitus);
router.get("/situs/:id", verify, roleCB, getSitusId);
router.post("/situs", verify, roleCB, createSitus);
router.patch("/situs/:id", verify, roleCB, updateSitus);
router.delete("/situs/:id", verify, roleCB, deleteSitus);

export default router;
