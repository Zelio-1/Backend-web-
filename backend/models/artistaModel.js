const mongoose = require ('mongoose')

const artistaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Por favor ingrese su nombre"]
    },
    generos: {
        type: String,
        required: [true, "Por favor ingrese sus generos musicales"]
    },
    idCancion: {
        type: Number,
        required: [true, "Ingrese el ID de la cancion"]
    }, 
    correo: {
        type: String,
        required: [true, "Por favor ingrese su correo electronico"]
    },
    disquera:{
        type: String,
        required: [true, "Por favor ingrese su disquera"]
    }
},{
    timestamps: true 
}
)

module.exports = mongoose.model("Artista", artistaSchema)