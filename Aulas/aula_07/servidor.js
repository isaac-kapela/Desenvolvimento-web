let express = require("express")
let app = express()
let port = 8000

let produtos = [
    {
        id: 1,
        nome: "bolo de laranja",
        descricao: "puro suco da laranja",
        valor: 35
    },
    {
        id: 2,
        nome: "bolo de murangu",
        descricao: "melhor bolo do mundo",
        valor: 100
    }
]

app.get("/produtos", function (req, res) {
    return res.send(produtos)
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})