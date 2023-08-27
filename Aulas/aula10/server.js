const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:admin123@appdatabase.ry0gm2w.mongodb.net/"
const Animal = require('./models/animal')
const AnimalSilvestre = require('./models/animaisSilvestres')
const cors = require('cors')

app.use(express.json())
// app.use(cors())

// ENDPOINT
app.get("/listar-animais", async (req, res) => {
    try {
        let animais = await Animal.find()
        return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// ENDPOINT
app.get("/listar-animais-silvestres", async (req, res) => {
    try {
        let animais = await AnimalSilvestre.find()
        return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// ENDPOINT
app.post('/adicionar-animal', async (req, res) => {
    let { nome, raca, peso } = req.body

    let animal = {
        nome,
        raca,
        peso
    }

    try {
        await Animal.create(animal)
        return res.status(201).json({ message: "Animal cadastrado com sucesso!" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

mongoose.connect(connectionString, {
    dbName: "PETSHOP"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
