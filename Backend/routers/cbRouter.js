const router = require("express").Router();

const {
  getAllCB,
  getCBId,
  getCBCategory,
  createCB,
  updateCB,
  deleteCB,
} = require("../controllers/cbController");

router.get("/", getAllCB);
router.get("/:id", getCBId);

router.get("/category/:categoryId", getCBCategory);
router.get("/category/:categoryId/:id", getCBId);
router.post("/:categoryId", createCB);
router.patch("/:id", updateCB);
router.delete("/:id", deleteCB);

module.exports = router;
