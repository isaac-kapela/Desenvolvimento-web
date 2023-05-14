const express =require('express')
const app = express()
const port = 8850
app.use(express.json())
app.use(express.json())
let bancoDeDadosprodutos = []

app.get('produtos', (req,res) =>{
    return res.status(200).json(bancoDeDadosprodutos)
   
})


app.post('/adicionar-produto',(req,res) => {
    let= body = req.body

    console.log(body)

    bancoDeDadosprodutos.push(body)

    return res.status(201).json('produto adicionado com sucesso!')
    
})

app.listen(port,() =>{
    console.log(`servidor rodando http://localhost:${port}`)
})