const {
  getUsers,
  getUserId,
  register,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserId);
router.post("/users", register);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
