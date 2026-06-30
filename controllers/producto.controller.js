const Producto = require('../models/producto.model');

// POST - Crear
exports.crear = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        const guardado = await nuevoProducto.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET - Listar todos
exports.listar = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

// GET - Buscar por ID
exports.buscarPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT - Actualizar
exports.actualizar = async (req, res) => {
    try {
        const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE - Eliminar
exports.eliminar = async (req, res) => {
    try {
        const eliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};