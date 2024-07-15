"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user_role: DataTypes.ENUM("Admin", "CB", "OPK"),
      imageUrl: DataTypes.ARRAY(DataTypes.STRING),
      refresh_token: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.DataCB, {
      foreignKey: "userId",
    });
    User.hasMany(models.DataOPK, {
      foreignKey: "userId",
    });
  };
  return User;
};
