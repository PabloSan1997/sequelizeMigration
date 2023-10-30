const { Sequelize } = require("sequelize");
const { variables } = require("../config/variables");

const sequilize = new Sequelize(variables.url_database, {
	dialect: "postgres",
    logging:true
});

module.exports = { sequilize };
