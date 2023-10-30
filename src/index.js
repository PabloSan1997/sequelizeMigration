const express = require("express");
const { variables } = require("./config/variables");
const { crearApi } = require("./routes/main");
const { Producto } = require("./database/Models/products");

const app = express();

app.use(express.json());

Producto.sync({ force: false })
	.then(() => console.log("Conectado a la base de datos"))
	.catch(() => console.error("Problemas con la base de datos"));

crearApi(app);

app.listen(variables.port, () => {
	console.log(`http://localhost:${variables.port}`);
});
