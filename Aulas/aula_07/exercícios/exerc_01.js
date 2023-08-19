const express = require("express")
const app = express()
const port = 7500

let bandas = [
    {
        nome: "Iron Maiden",
        principaisMusicas: ["Fear of the Dark", "The Trooper", "Run to the Hills"],
        integrantes: [
            {
                nome: "Steve Harris",
                paisOndeNasceu: "Reino Unido",
                idade: 67
            },
            {
                nome: "Dave Murray",
                paisOndeNasceu: "Reino Unido",
                idade: 66
            },
            {
                nome: "Adrian Smith",
                paisOndeNasceu: "Reino Unido",
                idade: 66
            }
        ]
    },
    {
        nome: "AC/DC",
        principaisMusicas: ["Back in Black ", "T.N.T", "Hells Bells"],
        integrantes: [
            {
                nome: "Angus Young",
                paisOndeNasceu: "Reino Unido",
                idade: 68
            },
            {
                nome: "Phil Rudd",
                paisOndeNasceu: "Austrália",
                idade: 68
            },
            {
                nome: "Stevie Young",
                paisOndeNasceu: "Reino Unido",
                idade: 66
            }
        ]
    }
]

app.get("/bandas", function (req, res) {
    return res.send(bandas)
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})