const express = require('express')
const app = express()
const port = 8000

let produtos = [
    {
        id: 1,
        nome: "Bolo de milho",
        descricao: "Puro suco do milho verde",
        valor: 25
    },
    {
        id: 2,
        nome: "Bolo de murangu",
        descricao: "Bolo top demais!!!!!",
        valor: 100
    }
]

//ENDPOINTS
app.get("/produtos", function (req, res) {
    return res.send(produtos)
})

// -------------------- SERVIDOR RODANDO --------------------
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})