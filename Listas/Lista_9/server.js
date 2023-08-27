const express = require('express')
const app = express()
const port = 7500
const connection = "mongodb+srv://leticiafrancielle:teste123@devsbar.1piblsf.mongodb.net/"
const mongoose = require('mongoose')

const Bebida = require('./models/bebida')
const Lanche = require('./models/lanche')

app.use(express.json())


app.post('/cadastrar-bebida', async (req, res) => {
    try {
        const { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body

        let bebida = {
            nome,
            descricao,
            fabricante,
            emEstoque,
            publicadoEm
        }
        await Bebida.create(bebida)
        return res.status(200).json({ message: "Bebida cadastrada com sucesso!!" })
    } catch (error) {
        return res.status(401).json({ error: "Erro ao cadastrar bebida." })
    }
})

app.get('/listar-bebidas', async (req, res) => {
    try {
        const bebidas = await Bebida.find()
        return res.status(200).json({ bebidas: bebidas })
    } catch (error) {
        return res.status(200).json({ error: "Erro. Tente novamente." })
    }
})



app.post('/cadastrar-lanche', async (req, res) => {
    try {
        const { nome, descricao, vegano, emEstoque, publicadoEm } = req.body

        let lanche = {
            nome,
            descricao,
            vegano,
            emEstoque,
            publicadoEm
        }
        await Lanche.create(lanche)
        return res.status(200).json({ message: "Lanche cadastrado com sucesso!!" })
    } catch (error) {
        return res.status(400).json({ error: "Erro ao cadastrar lanche." })
    }
})

app.get('/listar-lanches', async (req, res) => {
    try {
        const lanches = await Lanche.find()
        return res.status(200).json({ lanches: lanches })
    } catch (error) {
        return res.status(200).json({ error: "Erro. Tente novamente." })
    }
})


mongoose.connect(connection, {
    dbName: 'DevsBar'
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})