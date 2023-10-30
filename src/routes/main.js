const express = require('express');
const { productoRouter } = require('./productos');


function crearApi(app){
    const mainRouter = express.Router();
    app.use('/api/v1', mainRouter);
    mainRouter.use('/product', productoRouter)
    app.get('/', (req,res)=>{
        res.json({message:"Conectado"})
    });
}


module.exports={crearApi}