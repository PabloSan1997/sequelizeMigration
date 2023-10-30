const { DataTypes } = require("sequelize");
const { sequilize } = require("../config");

const producto_name = 'productos'

const schema_producto = {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey:true
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	costo: {
		type: DataTypes.DOUBLE,
		allowNull: false
	},
	descripcion: {
		type: DataTypes.STRING(2500),
		allowNull: false,
	},
	url_image: {
		type: DataTypes.STRING(3500),
		allowNull: false,
	},
}

const Producto = sequilize.define(
	producto_name, schema_producto,
	{
		timestamps: true,
	}
);


module.exports = {Producto, producto_name, schema_producto}