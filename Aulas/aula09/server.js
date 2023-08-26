const express = require('express')
const app = express()
const port = 8070
const connection = "mongodb+srv://admin:teste123@appdb.aj4dran.mongodb.net/"
const mongoose = require('mongoose')

const Produto = require('./models/produto')

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find()
        return res.status(200).json({ produtos: produtos })
    } catch (error) {
        return res.status(400).json({ error: "Erro! Tente novamente. " })
    }
})

app.post('/adicionar-produto', async (req, res) => {
    try {
        const { nome, descricao, valor } = req.body

        let produto = {
            nome,
            descricao, 
            valor
        }

        await Produto.create(produto)
        return res.status(201).json({ message: "Produto adicionado com sucesso!" })
    } catch (error) {
        return res.status(400).json({ error: "Erro ao adicionar produto." })
    }
})

mongoose.connect(connection, {
    dbName: 'ProdutosDB'
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})

