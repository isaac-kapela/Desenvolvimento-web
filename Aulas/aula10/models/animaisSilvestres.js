const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome: { type: String, required: true },
    raca: { type: String, required: true },
    peso: { type: Number, required: true }
})

const animalSilvestre = mongoose.model('animais_silvestres', animalSchema)

module.exports = animalSilvestre
