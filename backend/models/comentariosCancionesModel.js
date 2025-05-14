const mongoose = require("mongoose");

const comentarioCancionSchema = mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  idCancion: {
    type: Number,
    required: true
  },
  nombreArtista: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ComentarioCancion", comentarioCancionSchema);

