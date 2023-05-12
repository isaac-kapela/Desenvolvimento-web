const express = require("express")
const app = express()
const port = 9000

let produtos = [
    {
        nomeProduto: "Bolo",
        descricao: "Caseiro",
        valor: 15,
        criadoEm: "12/05/2023",
        emEstoque: false

    },
    {
        nomeProduto: "Bolo de cenoura",
        descricao: "Com chocolate",
        valor: 18,
        criadoEm: "12/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Bolo de murango",
        descricao: " com chocolate",
        valor: 2790,
        criadoEm: "12/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Bolo de fuba",
        descricao: "Caseiro",
        valor: 40,
        criadoEm: "12/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Bolo de banana",
        descricao: "Caseiro",
        valor: 50,
        criadoEm: "12/05/2023",
        emEstoque: false
    }
]

app.get("/produtos", function (req, res) {
    return res.send(produtos)
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})