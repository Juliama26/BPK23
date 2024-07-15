"use strict";
module.exports = (sequelize, DataTypes) => {
  const cbCategory = sequelize.define("cbCategory", {
    title: DataTypes.STRING,
  });

  cbCategory.associate = function (models) {
    cbCategory.hasMany(models.DataCB, {
      foreignKey: "categoryId",
    });
  };
  return cbCategory;
};
