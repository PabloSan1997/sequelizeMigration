const { Producto } = require("../database/Models/products");

class ProductoControlador {
	async leerProductos(req, res, next) {
		const data = await Producto.findAll();
		res.json(data);
	}
	async leerUnProducto(req, res, next) {
		const { id } = req.params;
		res.json({ id });
	}
	async agregarProducto(req, res, next) {
		try {
			const nuevoProducto = req.body;
			await Producto.create(nuevoProducto);
			res.status(201).json(nuevoProducto);
		} catch (error) {
			res.status(500).send();
		}
	}
	async eliminarProducto(req, res, next) {
		const { id } = req.params;
		await Producto.destroy({ where: { id } });
		res.status(204).send();
	}
	async editarElemento(req, res, next) {
		const { id } = req.params;
		const cuerpo = req.body;
		const buscar = await Producto.findByPk(id);
		await buscar.update(cuerpo);
		res.json({ id, cuerpo });
	}
}

module.exports = { ProductoControlador };
