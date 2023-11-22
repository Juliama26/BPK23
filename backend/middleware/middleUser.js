import User from "../models/usersModel.js";

export const verify = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Silahkan login terlebih dahulu" });
  }
  const user = await User.findOne({
    where: { uuid: req.session.userId },
  });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  req.userId = user.id;
  req.role = user.role;
  next();
};
export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: { uuid: req.session.userId },
  });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  if (user.role !== "Admin")
    return res
      .status(403)
      .json({ message: "Hanya Admin yang dapat mengakses" });
  next();
};

export const roleCB = async (req, res, next) => {
  const user = await User.findOne({
    where: { uuid: req.session.userId },
  });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  if (user.role !== "CB" && user.role !== "Admin")
    return res
      .status(403)
      .json({ message: "Upss! Hanya Role Admin dan CB yang dapat mengakses" });
  next();
};
export const roleOPK = async (req, res, next) => {
  const user = await User.findOne({
    where: { uuid: req.session.userId },
  });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  if (user.role !== "OPK" && user.role !== "Admin")
    return res.status(403).json({
      message: "Upss! Hanya Role Admin dan OPK yang dapat mengakses",
    });
  next();
};
