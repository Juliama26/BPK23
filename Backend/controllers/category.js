const {cbCategory, opkCategory} = require("../models");

//Category CB
const getCategoryCB = async (req, res) => {
  try {
    const response = await cbCategory.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getCategoryByIdCB = async (req, res) => {
  try {
    const response = await cbCategory.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!response) return res.status(404).json({message: "Category not found"});
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const createCategoryCB = async (req, res) => {
  try {
    const exists = await cbCategory.findOne({
      where: {title: req.body.title},
    });
    if (exists) return res.status(400).json({message: "Category sudah ada"});
    const response = await cbCategory.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
const deleteCategoryCB = async (req, res) => {
  try {
    const response = await cbCategory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!response) return res.status(404).json({message: "Category not found"});
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

// Category OPK
const getCategoryOPK = async (req, res) => {
  try {
    const response = await opkCategory.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getCategoryByIdOPK = async (req, res) => {
  try {
    const response = await opkCategory.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!response) return res.status(404).json({message: "Category not found"});
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
const createCategoryOPK = async (req, res) => {
  try {
    const exists = await opkCategory.findOne({
      where: {title: req.body.title},
    });
    if (exists) return res.status(400).json({message: "Category sudah ada"});
    const response = await opkCategory.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
const deleteCategoryOPK = async (req, res) => {
  try {
    const response = await opkCategory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!response) return res.status(404).json({message: "Category not found"});
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getCategoryCB,
  getCategoryByIdCB,
  createCategoryCB,
  deleteCategoryCB,
  // ==============
  getCategoryOPK,
  getCategoryByIdOPK,
  createCategoryOPK,
  deleteCategoryOPK,
};
