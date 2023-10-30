'use strict';

const { producto_name } = require('../src/database/Models/products');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(producto_name, [
      {
        "id": "7e232f28-75bb-4828-aae2-5cfeaadfbe25",
        "nombre": "Zapatos",
        "precio": 20.5,
        "descripcion": "Unos zapatos bastantes comodos y de diferentes colores",
        "url_image": "https://assetspwa.liverpool.com.mx/assets/digital/landing/zapatos/img/BLP_zapatos01b_1023.jpg",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": "8a2808a3-b905-4b95-9a2d-43ab1677c0f4",
        "nombre": "Laptop",
        "precio": 2047.5,
        "descripcion": "Una de las mejores laptops del mundo",
        "url_image": "https://media.gq.com.mx/photos/5fc1a6ff0274213f315a65d0/16:9/w_2560%2Cc_limit/laptop%2520sobre%2520escritorio.jpg",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete(producto_name, null, {});
  }
};
