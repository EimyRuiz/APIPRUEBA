const Cliente = require('../models/cliente.model');

// POST - Crear
exports.crear = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        const guardado = await nuevoCliente.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET - Listar todos
exports.listar = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

// GET - Buscar por ID
exports.buscarPorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT - Actualizar
exports.actualizar = async (req, res) => {
    try {
        const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE - Eliminar
exports.eliminar = async (req, res) => {
    try {
        const eliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json({ mensaje: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};