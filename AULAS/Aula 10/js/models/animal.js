const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome: {type: String, required: true},
    Raca: {type: String, required: true},
    Peso : {type: Number, required: true}
})

const animal = mongoose.model('Animais', animalSchema)

module.exports = animal