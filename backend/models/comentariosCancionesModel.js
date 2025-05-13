const mongoose = require("mongoose");

const comentarioCancionSchema = mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  correo: {
    type: Number,
    required: true
  },
  idCancion: {
    type: String,
    required: true
  },
  nombreArtista: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ComentarioCancion", comentarioSchema);

