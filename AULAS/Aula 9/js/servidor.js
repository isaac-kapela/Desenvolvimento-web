const express = require('express')
const app = express()
const port = 8080
const conetion = "mongodb+srv://isaackapela:Manzambi10@isaackapela.sk4afxb.mongodb.net/"
const mongoose = require('mongoose')
const Produto = require("../models/produto")


app.use(express.json())

app.get('/', async (req,res) =>{
    try{
        const produtos = await Produto.find()
        return res.status(200).json({ produtos: produtos})
    }catch(error){
        return res.status(400).json({ error: " erro! tente novamente"})
    } 
})

app.post('/adcionar-produto', async(req, res) =>{
    try{
        const{nome,descricao,valor } = req.body
        let produto = {
            nome,
            descricao,
            valor
        }
        await produto.create(produto)
        return res.status(201).json({ message:" produto adicionado com sucesso"})
        }catch(error){
            return res.status(400).json({error: "erro ao adicionar produto"})
        }
})


mongoose.connect(conetion,{
    dbNAME: 'produtosDB'
}).then(() => {
    console.log("mongoDB up!");
    console.log(`servidor rodadndo http://localhost${port}`)
    app.listen(port)
}) .catch((error) =>{
    console.log(error)

}) 

