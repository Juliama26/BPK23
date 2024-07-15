const {
  getCategoryByIdCB,
  getCategoryByIdOPK,
  getCategoryCB,
  getCategoryOPK,
} = require("../controllers/category");
const {
  getAllCB,
  getCBId,
  getCBCategory,
} = require("../controllers/cbController");
const {
  getAllOPK,
  getOPKId,
  getOPKCategory,
} = require("../controllers/opkController");

const router = require("express").Router();

router.get("/cb/:id", getCategoryByIdCB);
router.get("/cb", getCategoryCB);

router.get("/opk/:id", getCategoryByIdOPK);
router.get("/opk", getCategoryOPK);

router.get("/data-cb", getAllCB);
router.get("/cb-id/:id", getCBId);
// router.get("/category-cb/:categoryId", getCBCategory);
// router.get("/category-cb/:categoryId/:id", getCBId);
router.get("/data-cb/:categoryId", getCBCategory);
// router.get("/data-cb/:categoryId/:id", getCBId);

router.get("/data-opk", getAllOPK);
router.get("/opk-id/:id", getOPKId);
// router.get("/data-opk/:id", getOPKId);
router.get("/data-opk/:categoryId", getOPKCategory);
router.get("/data-opk/:categoryId/:id", getOPKId);

module.exports = router;
