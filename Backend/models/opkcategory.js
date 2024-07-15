"use strict";
module.exports = (sequelize, DataTypes) => {
  const opkCategory = sequelize.define("opkCategory", {
    title: DataTypes.STRING,
  });

  opkCategory.associate = function (models) {
    opkCategory.hasMany(models.DataOPK, {
      foreignKey: "categoryId",
    });
  };
  return opkCategory;
};
