'use strict';

const { producto_name } = require('../src/database/Models/products');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn(producto_name, 'precio', 'costo');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn(producto_name, 'costo', 'precio');
  }
};
