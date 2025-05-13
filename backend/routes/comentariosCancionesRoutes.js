const express = require('express');
const router = express.Router();

const {
  getComentariosPorCancion,
  crearComentarioPorCancion,
  updateComentarioPorCancion,
  eliminarComentarioPorCancion
} = require('../controllers/comentariosCancionController');

router.get('/:idCancion', getComentariosPorCancion);
router.post('/', crearComentarioPorCancion);
router.put('/:idCancion', updateComentarioPorCancion);
router.delete('/:idCancion', eliminarComentarioPorCancion);

module.exports = router;