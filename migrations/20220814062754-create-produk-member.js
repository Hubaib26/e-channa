"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produk_members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      produkId: {
        type: Sequelize.INTEGER,
      },
      memberId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("produk_members");
  },
};
