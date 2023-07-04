const express = require('express')
const app = express()

app.use(express.json())

const bancoDeDados = []

//ENDPOINT
app.get('/', (req, res) => {
    res.send(bancoDeDados)
})

//ENDPOINT
app.post('/add-produto', (req, res) => {
    let produto = req.body

    bancoDeDados.push(produto)
    res.send('Produto adicionado')
})

//ENDPOINT
app.delete('/delete-product/:id', (req, res) => {
    let product = bancoDeDados.filter(p => p == req.query)
    console.log(bancoDeDados)
    console.log(product)

    return res.send(product)
})

app.listen(8080, () => {
    console.log("http://localhost:8080")
})