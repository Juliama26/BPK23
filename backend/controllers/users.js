import User from "../models/usersModel.js";
import argon2 from "argon2";

export const getAllUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["uuid", "username", "email", "role", "createdAt"],
    });
    res.status(200).json(response);
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
};

export const getUserId = async (req, res) => {
  try {
    const response = await User.findOne({
      //atribute adalah yang ingin ditampilkan
      attributes: ["uuid", "username", "email", "role"],
      where: { uuid: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, confmPassword, role } = req.body;
  if (password !== confmPassword)
    return res.status(400).json({ message: "Password tidak sama" });
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ message: "User berhasil ditambahkan" });
  } catch (error) {
    req.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: { uuid: req.params.id },
  });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  const { username, email, password, confmPassword, role } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confmPassword)
    return res.status(400).json({ message: "Password tidak sama" });
  try {
    await User.update(
      {
        username: username,
        email: email,
        password: hashPassword,
        role: role,
      },
      { where: { id: user.id } }
    );
    res.status(200).json({ message: "User berhasil diupdate" });
  } catch (error) {
    req.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: { uuid: req.params.id },
  });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  try {
    await User.destroy({
      where: { id: user.id },
    });
    res.status(200).json({ message: "User berhasil dihapus" });
  } catch (error) {
    req.status(400).json({ message: error.message });
  }
};
