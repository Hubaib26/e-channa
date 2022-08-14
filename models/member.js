"use strict";
const { Model } = require("sequelize");
const produk_member = require("./produk_member");
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      member.belongsToMany(models.produk, { through: models.produk_member });
    }
  }
  member.init(
    {
      name: DataTypes.STRING,
      addres: DataTypes.STRING,
      city: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "member",
    }
  );
  return member;
};
