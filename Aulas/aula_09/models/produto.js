const mongoose = require('mongoose')

const produtoShema = mongoose.Schema ({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    valor: {type: Number, required: true}
})

const Produto = mongoose.model('produtos', produtoShema)

module.exports = Produto