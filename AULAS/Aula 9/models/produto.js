const mongoose = require("mongoose")
const produtochema = mongoose.Schema({
     nome :{ type: String, required: true},
     descricao: { type: String, required: true},
    valor :{ type: Number, required: true}

})

const Produto = mongoose.model("produtos", produtochema)

module.exports = Produto