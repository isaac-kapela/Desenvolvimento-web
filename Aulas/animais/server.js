const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8700
const connectionString = "mongodb+srv://leticiafrancielle:teste123@appdatabase.sjsbjbi.mongodb.net/"
const Animal = require('./models/animal')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/listar-animais", async (req, res) => {
    try {
        let animais = await Animal.find()
        return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-animal', async (req, res) => {
   
    let { nome, raca, peso, imagem } = req.body

        let animal = {
            nome,
            raca,
            peso,
            imagem
        }

    try {
        await Animal.create(animal)
        return res.status(201).json({ message: "Animal cadastrado com sucesso!" })
    } catch (error) {
        return res.status(500).json({ error: "Erro ao cadastrar animal." })
    }
})

mongoose.connect(connectionString, {
    dbName: "PETSHOP"
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
