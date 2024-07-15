"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const DataCB = sequelize.define(
    "DataCB",
    {
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      namaLain: DataTypes.STRING,
      koordx: DataTypes.STRING,
      koordy: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      kabupaten: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      kelurahan: DataTypes.STRING,
      dusun: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      narasumber: DataTypes.STRING,
      imageUrl: DataTypes.ARRAY(DataTypes.STRING),
      documenUrl: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cbCategories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DataCB",
    }
  );
  DataCB.associate = function (models) {
    DataCB.belongsTo(models.User, {
      foreignKey: "userId",
    });
    DataCB.belongsTo(models.cbCategory, {
      foreignKey: "categoryId",
    });
  };

  return DataCB;
};
