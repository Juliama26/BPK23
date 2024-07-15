"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const DataOPK = sequelize.define(
    "DataOPK",
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
      etnis: DataTypes.STRING,
      jenis: DataTypes.STRING,
      aksara: DataTypes.STRING,
      dialek: DataTypes.STRING,
      fungsi: DataTypes.STRING,
      kegunaan: DataTypes.STRING,
      bahan: DataTypes.STRING,
      bahasa: DataTypes.STRING,
      pencipta: DataTypes.STRING,
      perlengkapan: DataTypes.STRING,
      nilai_moral: DataTypes.STRING,
      aturan: DataTypes.STRING,
      jml_pemain: DataTypes.INTEGER,
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
          model: "opkCategories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DataOPK",
    }
  );

  DataOPK.associate = function (models) {
    DataOPK.belongsTo(models.User, {
      foreignKey: "userId",
    });
    DataOPK.belongsTo(models.opkCategory, {
      foreignKey: "categoryId",
    });
  };
  return DataOPK;
};
