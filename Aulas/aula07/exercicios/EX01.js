const express = require('express')
const app = express()
const port = 9000

// Rotas - Endpoints

let bandas = [
    {
        nome: 'system of a down',
        principaisMusicas: ['Chop suey', 'lonely day'],
        integrantes: [
            {
                nome: 'serj tankian',
                pais: "",
                idade: ""
            },
            {
                nome: 'serj tankian',
                pais: "",
                idade: ""
            }
        ]
    },
    {
        nome: 'system of a down',
        principaisMusicas: ['Chop suey', 'lonely day'],
        integrantes: [
            {
                nome: 'serj tankian',
                pais: "",
                idade: ""
            },
            {
                nome: 'serj tankian',
                pais: "",
                idade: ""
            }
        ]
    }
]

app.get('/bandas', function (req, res) {
    return res.send(bandas)
})

app.get('/adicionar-bandas', function (req, res) {
    return res.send(bandas)
})

app.listen(port, function () {
    console.log('Servidor rodando')
})


