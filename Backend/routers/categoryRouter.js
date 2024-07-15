const {
  getCategoryCB,
  getCategoryOPK,
  createCategoryCB,
  createCategoryOPK,
  deleteCategoryCB,
  deleteCategoryOPK,
  getCategoryByIdCB,
  getCategoryByIdOPK,
} = require("../controllers/category");

const router = require("express").Router();

router.get("/cb", getCategoryCB);
router.get("/cb/:id", getCategoryByIdCB);
router.post("/cb", createCategoryCB);
router.delete("/cb/:id", deleteCategoryCB);

router.get("/opk", getCategoryOPK);
router.get("/opk/:id", getCategoryByIdOPK);
router.post("/opk", createCategoryOPK);
router.delete("/opk/:id", deleteCategoryOPK);

module.exports = router;
