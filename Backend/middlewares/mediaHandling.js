require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  secure: true,
});

const uploadCloud = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file);
    return result.secure_url;
  } catch (error) {
    console.log(error);
  } finally {
    fs.unlinkSync(file);
  }
};

const localStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    let filName = String(Date.now()) + "-" + file.originalname;
    callback(null, filName);
  },
});

const fileFilter = (req, file, callback) => {
  try {
    if (["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
      return callback(null, true);
    }
    return callback(new Error("Invalid file type"), false);
  } catch (error) {
    return callback(error, false);
  }
};

const uploder = multer({storage: localStorage, fileFilter: fileFilter});

module.exports = {uploder, uploadCloud};
