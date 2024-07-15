const jwt = require("jsonwebtoken");
const {User} = require("../models");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    // req.role = decoded.role;
    req.userId = decoded.userId;
    next();
  });
};

const verifyRole = (roles) => {
  return async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.sendStatus(401);
    }
    const user = await User.findOne({where: {refresh_token: refreshToken}});
    if (!user) {
      return res.sendStatus(403);
    }
    if (!roles.includes(user.user_role)) {
      return res.status(403).json({message: "Akses ditolak"});
    }
    next();
  };
};

module.exports = {verifyToken, verifyRole};
