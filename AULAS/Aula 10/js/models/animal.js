const mongoose = require('mongoose')

const animalSchema = mongoose.animalSchema({
    nome: {type: String, required: true},
    Raca: {type: String, required: true},
    Peso : {type: Number, required: true}
})

const animal = mongoose.model('Animais', animalSchema)

module.exports = animal