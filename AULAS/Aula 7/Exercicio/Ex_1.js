const expresss = require('express')
const app = expresss()
const port = 9000

let bandas = [
    {
        nome: "Twenty one pilots",
        musicasPrincipais: ["stressed out", " Ride", "Chlorine"],
        integrantes: [

            {
                id: 1,
                nome: " tyler joseph",
                idade: " deve estar na casa dos 30",
                funcao: " Pianista",
                nacionalidade: "EUA"
            },

            {
                id: 2,
                nome: " josh dun",
                idade: " deve estar na casa dos 30",
                funcao: " Baterista",
                nacionalidade: "EUA"
            },
            {
                id: 3,
                nome: " Nick thomas",
                idade: " deve estar na casa dos 30",
                funcao: " baixista",
                nacionalidade: "EUA"
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
