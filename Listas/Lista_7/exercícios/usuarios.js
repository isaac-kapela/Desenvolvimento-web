const express = require("express")
const app = express()
const port = 8000

let usuarios = [
    {
        nomeUsuario: "Chaves",
        criadoEm: "01/02/2019",
        idade: 17,
        email: "chavito123@gmail.com",
        isAdmin: true,
        telefone: ["Pessoal: 119897865", "Comercial: 25451679"],
        endereco: ["rua tal tal", "rua de lá", "rua de cá"]
    },
    {
        nomeUsuario: "Chiquinha",
        criadoEm: "05/07/2010",
        idade: 15,
        email: "chiquita123@gmail.com",
        isAdmin: false,
        telefone: ["Pessoal: 11988625432", "Comercial: 43525417"],
        endereco: ["rua maria maria", "rua nunk", "rua alta"]
    },
    {
        nomeUsuario: "Seu Madruga",
        criadoEm: "02/08/2012",
        idade: 45,
        email: "madruginha.a@gmail.com",
        isAdmin: true,
        telefone: ["Pessoal: 119002645", "Comercial: 627645637"],
        endereco: ["rua pague", "rua o seu", "rua aluguel"]
    },
    {
        nomeUsuario: "Dona Florinda",
        criadoEm: "07/07/2017",
        idade: 27,
        email: "florindinha@gmail.com",
        isAdmin: true,
        telefone: ["Pessoal: 1190778976", "Comercial: 25274707"],
        endereco: ["rua flores", "rua margarida", "rua sol"]
    },
    {
        nomeUsuario: "Quico",
        criadoEm: "09/02/2019",
        idade: 19,
        email: "chiquito123@gmail.com",
        isAdmin: true,
        telefone: ["Pessoal: 747353563", "Comercial: 354632836"],
        endereco: ["rua tal", "rua dali", "rua de cá"]
    }
]

app.get("/usuarios", function (req, res) {
    return res.send(usuarios)
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})





