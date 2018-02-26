//Requires
var express = require('express');
var mongoose = require('mongoose');
var BASE_DE_DATOS_URI = require('./config').BASE_DE_DATOS_URI;

//Iniciaizar variables
var app = express();

//Importar Rutas
var appRoutes = require('./routes/app');


//Conexion a la base de datos
mongoose.connection.openUri(BASE_DE_DATOS_URI, (err, res) => {
    if (err) {
        throw err;
    }
    console.log("Base de datos online");
});

//Rutas
app.use('/', appRoutes);



//lanzar servidor
app.listen(3000, () => {
    console.log('Servidor en puerto 3k');
})