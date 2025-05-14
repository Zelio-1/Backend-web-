const mongoose = require("mongoose");

const comentarioCancionSchema = mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  idCancion: {
    type: Number,
    required: true
  },
}, {
    timestamps: true 
});

module.exports = mongoose.model("ComentarioCancion", comentarioCancionSchema);

