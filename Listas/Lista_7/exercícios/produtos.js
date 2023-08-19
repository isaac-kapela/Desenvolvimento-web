const express = require("express")
const app = express()
const port = 9000

let produtos = [
    {
        nomeProduto: "Chocolate",
        descricao: "Barrinha de chocolate ao leite",
        valor: 6,
        criadoEm: "11/05/2023",
        emEstoque: true

    },
    {
        nomeProduto: "Bolo de maçã",
        descricao: "Bolinho delicioso",
        valor: 30,
        criadoEm: "10/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Celular",
        descricao: "Sansung A32",
        valor: 2790,
        criadoEm: "11/05/2022",
        emEstoque: false
    },
    {
        nomeProduto: "Câmera fotografica",
        descricao: "Fotos maravilhosas",
        valor: 3000,
        criadoEm: "07/07/2018",
        emEstoque: true
    },
    {
        nomeProduto: "Notebook",
        descricao: "Dell Intel core i5",
        valor: 5000,
        criadoEm: "11/05/2020",
        emEstoque: false
    }
]

app.get("/produtos", function (req, res) {
    return res.send(produtos)
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})