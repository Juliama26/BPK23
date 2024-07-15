const {whoami, login, logout} = require("../controllers/authController");
const {register} = require("../controllers/userController");
const {uploder} = require("../middlewares/mediaHandling");

const router = require("express").Router();

router.get("/whoami", whoami);
router.post("/login", login);
router.delete("/logout", logout);

router.post("/admin-register", uploder.array("imageUrl"), register);

module.exports = router;
