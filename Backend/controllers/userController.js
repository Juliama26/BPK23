const {User} = require("../models");
const bcrypt = require("bcrypt");
const {uploadCloud} = require("../middlewares/mediaHandling");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    if (!users) return res.status(404).json({message: "User not found"});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getUserId = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    if (!user) return res.status(404).json({message: "User not found"});
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const register = async (req, res) => {
  const {fullName, email, password, user_role} = req.body;
  const files = req.files;
  try {
    let imageUrl = [];
    if (files && files.length > 0) {
      const uploadPromises = files.map((file) => uploadCloud(file.path));
      imageUrl = await Promise.all(uploadPromises);
    }

    const existEmail = await User.findOne({where: {email}});
    if (existEmail) {
      return res.status(400).json({message: "Email sudah terdaftar"});
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({
      fullName,
      email,
      password: hashedPassword,
      user_role,
      imageUrl: imageUrl.length > 0 ? imageUrl : null,
    });
    return res.status(201).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const updateUser = async (req, res) => {
  const {fullName, email, password, user_role} = req.body;
  const files = req.files;
  try {
    let imageUrl = [];
    if (files && files.length > 0) {
      const uploadPromises = files.map((file) => uploadCloud(file.path));
      imageUrl = await Promise.all(uploadPromises);
    }
    const hashedPassword = password ? bcrypt.hashSync(password, 10) : null;
    const userToUpdate = await User.findOne({where: {id: req.params.id}});
    if (!userToUpdate) {
      return res.status(404).json({message: "User not found"});
    }
    if (email && email !== userToUpdate.email) {
      const existEmail = await User.findOne({where: {email}});
      if (existEmail) {
        return res.status(400).json({message: "Email sudah terdaftar"});
      }
    }
    await User.update(
      {
        fullName: fullName || userToUpdate.fullName,
        email: email || userToUpdate.email,
        password: hashedPassword || userToUpdate.password,
        user_role: user_role || userToUpdate.user_role,
        imageUrl: imageUrl.length > 0 ? imageUrl : userToUpdate.imageUrl,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const deleteUser = async (req, res) => {
  try {
    const userToDelete = await User.findOne({where: {id: req.params.id}});
    if (!userToDelete) {
      return res.status(404).json({message: "User not found"});
    }
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getUsers,
  getUserId,
  register,
  updateUser,
  deleteUser,
};
