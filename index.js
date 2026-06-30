const express = require('express');
const conectarBD = require('./config/connectiondb');

// Importar los enrutadores con los nombres exactos del profesor
const clientesRouter = require('./router/enrutamiento.router');
const productosRouter = require('./router/producto.router');
const serviciosRouter = require('./router/servicios.router');

const app = express();

// Middlewares para leer JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conectar base de datos
conectarBD();

// Usar los enrutadores directamente en la raíz de la app
app.use('/', clientesRouter);
app.use('/', productosRouter);
app.use('/', serviciosRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});