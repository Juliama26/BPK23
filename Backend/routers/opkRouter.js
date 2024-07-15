const {
  getAllOPK,
  getOPKCategory,
  getOPKId,
  createOPK,
  updateOPK,
  deleteOPK,
} = require("../controllers/opkController");

const router = require("express").Router();

router.get("/", getAllOPK);
router.get("/:id", getOPKId);

router.get("/category/:categoryId", getOPKCategory);
router.get("/category/:categoryId/:id", getOPKId);
router.post("/:categoryId", createOPK);
router.patch("/:id", updateOPK);
router.delete("/:id", deleteOPK);

module.exports = router;
