"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class produk_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      produk_member.belongsTo(models.produk, { foreignKey: "produkId" });
      produk_member.belongsTo(models.member, { foreignKey: "memberId" });
    }
  }
  produk_member.init(
    {
      produkId: DataTypes.INTEGER,
      memberId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "produk_member",
    }
  );
  return produk_member;
};
