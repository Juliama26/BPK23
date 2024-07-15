const {User, DataOPK, opkCategory} = require("../models");
const {uploadCloud} = require("../middlewares/mediaHandling");

const getAllOPK = async (req, res) => {
  try {
    const data = await DataOPK.findAll({
      include: [
        {
          model: User,
          attributes: ["fullName", "imageUrl"],
        },
        {
          model: opkCategory,
          attributes: ["title", "id"],
        },
      ],
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getOPKId = async (req, res) => {
  try {
    const data = await DataOPK.findOne({
      where: {
        uuid: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["fullName", "imageUrl"],
        },
        {
          model: opkCategory,
          attributes: ["title", "id"],
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

const getOPKCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    console.log(categoryId);

    if (!categoryId) {
      return res.status(404).json({message: "ID Category not found"});
    }

    const data = await DataOPK.findAll({
      include: [
        {
          model: User,
          attributes: ["fullName", "imageUrl"],
        },
        {
          model: opkCategory,
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

const createOPK = async (req, res) => {
  const {userId, ...otherData} = req.body;
  const categoryId = req.params.categoryId;
  try {
    const category = await opkCategory.findOne({
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
    await DataOPK.create({
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

const updateOPK = async (req, res) => {
  const {userId, ...otherData} = req.body;
  try {
    const data = await DataOPK.findOne({
      where: {uuid: req.params.id},
    });
    if (!data) return res.status(404).json({message: "Data not found"});
    let imageUrl = [];
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) => uploadCloud(file.path));
      imageUrl = await Promise.all(uploadPromises);
    }
    await DataOPK.update(
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

const deleteOPK = async (req, res) => {
  try {
    const data = await DataOPK.findOne({
      where: {uuid: req.params.id},
    });
    if (!data) return res.status(404).json({message: "Data not found"});
    await DataOPK.destroy({
      where: {uuid: req.params.id},
    });
    return res.status(200).json({message: "Berhasil!"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getAllOPK,
  getOPKId,
  getOPKCategory,
  createOPK,
  updateOPK,
  deleteOPK,
};
