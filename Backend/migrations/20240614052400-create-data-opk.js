"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DataOPKs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      etnis: {
        type: Sequelize.STRING,
      },
      jenis: {
        type: Sequelize.STRING,
      },
      aksara: {
        type: Sequelize.STRING,
      },
      dialek: {
        type: Sequelize.STRING,
      },
      fungsi: {
        type: Sequelize.STRING,
      },
      kegunaan: {
        type: Sequelize.STRING,
      },
      bahan: {
        type: Sequelize.STRING,
      },
      bahasa: {
        type: Sequelize.STRING,
      },
      pencipta: {
        type: Sequelize.STRING,
      },
      perlengkapan: {
        type: Sequelize.STRING,
      },
      nilai_moral: {
        type: Sequelize.STRING,
      },
      aturan: {
        type: Sequelize.STRING,
      },
      jml_pemain: {
        type: Sequelize.INTEGER,
      },
      provinsi: {
        type: Sequelize.STRING,
      },
      kabupaten: {
        type: Sequelize.STRING,
      },
      kecamatan: {
        type: Sequelize.STRING,
      },
      kelurahan: {
        type: Sequelize.STRING,
      },
      dusun: {
        type: Sequelize.STRING,
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
      narasumber: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      documenUrl: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "opkCategories",
          key: "id",
        },
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
    await queryInterface.dropTable("DataOPKs");
  },
};
