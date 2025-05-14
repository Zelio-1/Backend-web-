const express = require('express');
const router = express.Router();

const {
  getComentariosPorCancion,
  getAllComentarioPorCancion, 
  crearComentarioPorCancion,
  updateComentarioPorCancion,
  eliminarComentarioPorCancion
} = require('../controllers/comentariosCancionController');

router.get('/:idCancion', getComentariosPorCancion);
router.get('/', getAllComentarioPorCancion);
router.post('/', crearComentarioPorCancion);
router.put('/:id', updateComentarioPorCancion);
router.delete('/:idC', eliminarComentarioPorCancion);

module.exports = router;