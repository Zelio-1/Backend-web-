const asyncHandler = require ('express-async-handler')
const Artista_modelo = require ("../models/artistaModel")

const getArtista =  asyncHandler(async(request, response) =>{
    const artistas = await Artista_modelo.find({})
    response.status (200).json({artistas})
})

const createArtista = asyncHandler(async(request, response) =>{
    if(!request.body.nombre){
        response.status(400)
        throw new Error ("Escriba un nombre")
    }
    if(!request.body.generos){
        response.status(400)
        throw new Error ("Escriba los generos musicales")
    }
    if(!request.body.idCancion){
        response.status(400)
        throw new Error ("Escriba el ID de la cancion")
    }
    if(!request.body.correo){
        response.status(400)
        throw new Error ("Escriba un correo electronico")
    }
    if(!request.body.disquera){
        response.status(400)
        throw new Error ("Escriba la disquera")
    }
    const artista = await Artista_modelo.create({
        nombre: request.body.nombre,
        generos: request.body.generos,
        idCancion: request.body.idCancion,
        correo: request.body.correo,
        disquera: request.body.disquera
    })
    response.status (200).json({artista})
})

const updateArtista = asyncHandler (async(request, response) =>{
    const artista = await Artista_modelo.findById (request.params.id) 
    if(!artista){
        response.status (404)
        throw new Error ('Artista no encontrado')
    }

    const artista_update = await Artista_modelo.findByIdAndUpdate (request.params.id, request.body, {
        new: true
    })
    response.status (200).json(artista_update)
})

const deleteArtista = asyncHandler(async(request, response) =>{
    const artista = await Artista_modelo.findById (request.params.id) 
    if(!artista){
        response.status (404)
        throw new Error ('Artista no encontrado')
    }

    await artista.deleteOne ()

    response.status (200).json({"id": request.params.id})
})

module.exports = {
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista
}