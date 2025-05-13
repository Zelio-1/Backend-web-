const express = require ('express')
const router = express.Router()
const {getArtista, createArtista, updateArtista, deleteArtista} = require ("../controllers/artistasControllers")

router.get('/', getArtista)

router.post('/', createArtista)

router.put('/:id', updateArtista)

router.delete('/:id', deleteArtista)

module.exports = router