const express = require('express')
const app = express()
const port = 8000
const connection = "mongodb+srv://leticiafrancielle2005:teste123@appdb.wlkscie.mongodb.net/"
const mongoose = require('mongoose')

const Produto = require('./models/produto')

app.use(express.json())

app.get('/', async (req,res) => {
    try {
        const produtos = await Produto.find()
        return res.status(200).json({produtos: produtos})
    } catch (error) {
        return res.status(200).json({error: "Erro. Tente novamente."})
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
        return res.status(200).json({message: "Produto adicionado com sucesso!"})
    } catch (error) {
        return res.status(400).json({error: "Erro ao adicionar produto."})
    }
})


mongoose.connect(connection, {
    dbName: 'ProdutosDB'
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
