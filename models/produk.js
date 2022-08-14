"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      produk.belongsTo(models.kategori, { foreignKey: "kategori_id" });
      produk.belongsToMany(models.member, { through: models.produk_member });
    }
  }
  produk.init(
    {
      kategori_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      stok: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "produk",
    }
  );
  return produk;
};
