const express = require ("express")
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString ="mongodb+srv://<username>:<password>@appdatabase.oxptztv.mongodb.net/"
const animal = require ('./models/animal')

app.use(express.json())

app.get("/listar-animal", async (req,res) =>{
    try {
        let animais = await animal.find()
     return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/adicionar-animal', async (req, res) => {
    let{nome, raca,peso } = req.body

    let animal ={
        nome,
        raca,
        peso
    }

    try {
        await Animal.create(animal)
        return res.status(201).json({ message: " Animal cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

mongoose.connect (connectionString, {
    dbname: "PETSHOP"
}).Then(()=> {
    Console.console.log("MongoDB up!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) =>{
    console.log(Error)
})