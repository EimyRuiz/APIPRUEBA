const express = require('express');
const clienteController = require('../controllers/cliente.controller'); 
const router = express.Router();

router.get('/clientes', clienteController.listar);
router.get('/clientes/:id', clienteController.buscarPorId);
router.post('/clientes', clienteController.crear);
router.put('/clientes/:id', clienteController.actualizar);
router.delete('/clientes/:id', clienteController.eliminar);

module.exports = router;