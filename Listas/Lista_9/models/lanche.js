const mongoose = require('mongoose')

const lancheShema = mongoose.Schema ({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    vegano: {type: Boolean, required: true},
    emEstoque: {type: Boolean, required: true},
    publicadoEm: {type: Date, required: true}
})

const Lanche = mongoose.model('Lanches', lancheShema)

module.exports = Lanche