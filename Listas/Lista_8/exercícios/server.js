const express = require('express')
const app = express()
const port = 7200

app.use(express.json())

let bancoDeDadosProdutos = []

app.post("/adicionar-produto", (req, res)=> {
    let body = req.body
    console.log(body)

    bancoDeDadosProdutos.push(body)

    return res.status(201).json("Produto adicionado com sucesso!")
})

app.get("/listar-produtos", (req, res)=>{
    return res.status(200).json(bancoDeDadosProdutos)
})

app.listen(port, ()=>{
    console.log(`servidor rodando em http://localhost:${port}`)
})