'use strict';

const { DataTypes } = require('sequelize');
const { producto_name, schema_producto } = require('../src/database/Models/products');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.createTable(producto_name, {...schema_producto,
    createdAt:{
      type:DataTypes.DATE
    },
    updatedAt:{
      type:DataTypes.DATE
    }
  })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(producto_name);
  }
};
