const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
let ejs = require('ejs');
//variables de entorno****************
require("dotenv").config();

const app = express();

//SETINGS*****************************
//este codigo es de configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES************************
//usando morgan
app.use(morgan('dev'));

// //creando configuracion de la conexion
app.use(myConnection(mysql, {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}, 'single'));
app.use(express.urlencoded({extended: false}));

//RUTAS******************************
//importando rutas
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');
//rutas
app.use('/', customerRoutes);

//ARCHIVOS ESTATICOS*****************
app.use(express.static(path.join(__dirname, 'public')));

//servidor escuchando en el puerto 3000**************
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});