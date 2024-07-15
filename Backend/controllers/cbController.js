const {User, DataCB, cbCategory} = require("../models");
const {uploadCloud} = require("../middlewares/mediaHandling");

const getAllCB = async (req, res) => {
  try {
    const data = await DataCB.findAll({
      include: [
        {
          model: User,
          attributes: ["fullName", "imageUrl"],
        },
        {
          model: cbCategory,
          attributes: ["title"],
        },
      ],
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getCBId = async (req, res) => {
  try {
    const data = await DataCB.findOne({
      where: {
        uuid: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["fullName", "imageUrl"],
        },
        {
          model: cbCategory,
          attributes: ["title"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!data) return res.status(404).json({message: "Data not found"});
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getCBCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    if (!categoryId) {
      return res.status(404).json({message: "ID Category not found"});
    }

    const data = await DataCB.findAll({
      include: [
        {
          model: User,
          attributes: ["fullName", "imageUrl"],
        },
        {
          model: cbCategory,
          attributes: ["title"],
        },
      ],
      where: {
        categoryId: categoryId,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const createCB = async (req, res) => {
  const {userId, ...otherData} = req.body;
  const categoryId = req.params.categoryId;
  try {
    const category = await cbCategory.findOne({
      where: {id: categoryId},
    });
    if (!category) {
      return res.status(404).json({message: "Category not found"});
    }

    let imageUrl = [];
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) => uploadCloud(file.path));
      imageUrl = await Promise.all(uploadPromises);
    }
    await DataCB.create({
      ...otherData,
      imageUrl: imageUrl.length > 0 ? imageUrl : null,
      userId: req.userId,
      categoryId: categoryId,
    });
    return res.status(201).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const updateCB = async (req, res) => {
  const {userId, ...otherData} = req.body;
  try {
    const data = await DataCB.findOne({
      where: {uuid: req.params.id},
    });
    if (!data) return res.status(404).json({message: "Data not found"});
    let imageUrl = [];
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) => uploadCloud(file.path));
      imageUrl = await Promise.all(uploadPromises);
    }
    await DataCB.update(
      {
        ...otherData,
        imageUrl: imageUrl.length > 0 ? imageUrl : data.imageUrl,
      },
      {
        where: {uuid: req.params.id},
      }
    );
    return res.status(201).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
const deleteCB = async (req, res) => {
  try {
    const data = await DataCB.findOne({
      where: {uuid: req.params.id},
    });
    if (!data) return res.status(404).json({message: "Data not found"});
    await DataCB.destroy({
      where: {uuid: req.params.id},
    });
    return res.status(200).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getAllCB,
  getCBId,
  getCBCategory,
  createCB,
  updateCB,
  deleteCB,
};
