const mongoose = require("mongoose");

const comentarioCancioneSchema = mongoose.Schema({
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

module.exports = mongoose.model("ComentarioCancione", comentarioCancioneSchema);

