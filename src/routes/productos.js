const express = require('express');
const { ProductoControlador } = require('../controllers/product.controllers');

const productoRouter = express.Router();

const servicio = new ProductoControlador();

productoRouter.get('/', servicio.leerProductos);
productoRouter.get('/:id', servicio.leerUnProducto);
productoRouter.post('/', servicio.agregarProducto);
productoRouter.put('/:id', servicio.editarElemento);
productoRouter.delete('/:id', servicio.eliminarProducto);

module.exports = {productoRouter}