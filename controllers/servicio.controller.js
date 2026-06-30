const Servicio = require('../models/servicio.model');

// POST - Crear
exports.crear = async (req, res) => {
    try {
        const nuevoServicio = new Servicio(req.body);
        const guardado = await nuevoServicio.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET - Listar todos
exports.listar = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

// GET - Buscar por ID
exports.buscarPorId = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        if (!servicio) return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT - Actualizar
exports.actualizar = async (req, res) => {
    try {
        const actualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE - Eliminar
exports.eliminar = async (req, res) => {
    try {
        const eliminado = await Servicio.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Servicio no encontrado' });
        res.json({ mensaje: 'Servicio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};