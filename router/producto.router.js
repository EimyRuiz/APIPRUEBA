const express = require('express');
const productoController = require('../controllers/producto.controller'); 
const router = express.Router();

router.get('/productos', productoController.listar);
router.get('/productos/:id', productoController.buscarPorId);
router.post('/productos', productoController.crear);
router.put('/productos/:id', productoController.actualizar);
router.delete('/productos/:id', productoController.eliminar);

module.exports = router;