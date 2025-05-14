const asyncHandler = require('express-async-handler');
const ComentariosPorCancion = require('../models/comentariosCancionesModel');

const getAllComentarioPorCancion =  asyncHandler(async(request, response) =>{
    const comentarios = await ComentariosPorCancion.find({})
    response.status (200).json({comentarios})
})

const getComentariosPorCancion = asyncHandler(async (req, res) => {
  const comentarios = await ComentariosPorCancion.find({ idCancion: req.params.idCancion });
  res.status(200).json(comentarios);
});

const crearComentarioPorCancion = asyncHandler(async (request, response) => {
    if (!request.body.texto) {
        response.status(400);
        throw new Error("Escriba un comentario");
    }
    if (!request.body.idCancion) {
        response.status(400);
        throw new Error("Escriba el ID de la canción");
    }

    const comentario = await ComentariosPorCancion.create({
        texto: request.body.texto,
        idCancion: request.body.idCancion
    });

    response.status(200).json({ comentario });
});


const updateComentarioPorCancion = asyncHandler(async (req, res) => {
  const comentario = await ComentariosPorCancion.findById(req.params.id);
  if (!comentario) {
    res.status(404);
    throw new Error('Comentario no encontrado');
  }
  const actualizado = await ComentariosPorCancion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json({ actualizado });
});

const eliminarComentarioPorCancion = asyncHandler(async (req, res) => {
  const comentario = await ComentariosPorCancion.findById(req.params.id);

  if (!comentario) {
    res.status(404).json({ mensaje: "No se encontró el comentario" });
    return;
  }

  await comentario.deleteOne();
  res.status(200).json({ mensaje: "Comentario eliminado" });
});

module.exports = {
  getComentariosPorCancion,
  getAllComentarioPorCancion, 
  crearComentarioPorCancion,
  updateComentarioPorCancion,
  eliminarComentarioPorCancion
};
