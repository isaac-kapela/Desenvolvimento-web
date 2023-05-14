let express = require('express')
let app = express()
let port = 8000


let produtos = [
    {
        id: 1,
        nome: " Bolo de milho",
        descricao: " Bolo top de mais!!!",
        preco: 10
    },
    {

        id: 1,
        nome: " Bolo de morango",
        descricao: " Bolo top de mais!!!",
        preco: 10
    }


]
app.get("/produtos", function (req, res) {
    return res.send(produtos)
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})