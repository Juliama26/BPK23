const router = require("express").Router();

const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const cbRouter = require("./cbRouter");
const opkRouter = require("./opkRouter");
const publicRouter = require("./publicRouter");

const {uploder} = require("../middlewares/mediaHandling");
const {verifyToken, verifyRole} = require("../middlewares/userHandling");

router.use("/auth", authRouter);

router.use(
  "/manage",
  verifyToken,
  verifyRole(["Admin"]),
  uploder.array("imageUrl"),
  userRouter
);

router.use("/category", verifyToken, categoryRouter);

router.use(
  "/data-cb",
  verifyToken,
  verifyRole(["Admin", "CB"]),
  uploder.array("imageUrl"),
  cbRouter
);

router.use(
  "/data-opk",
  verifyToken,
  verifyRole(["Admin", "OPK"]),
  uploder.array("imageUrl"),
  opkRouter
);

router.use("/public", publicRouter);

module.exports = router;
