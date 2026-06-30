const mongoose = require("mongoose");
require('dotenv').config();

const conectarBD = async () => {
    try {
        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI);
        console.log("¡Conexión exitosa a MongoDB Atlas!");
    } catch (err) {
        console.error("Error al conectar a la base de datos:", err);
        process.exit(1);
    }
};

module.exports = conectarBD;