// Importando o módulo 'express' e atribuindo-o à variável 'express'
import express from 'express';
import conexao from './database/conexao.js';
// Criando uma aplicação Express e atribuindo-a à constante 'APP'
const APP = express();


// Configurando a aplicação para receber e enviar dados no formato JSON
APP.use(express.json());

function buscarFeticeiroID(id){
    return feticeiros_jujutsu.filter(feticeiro => feticeiro.id == id);

}
function buscarFeticeiroNome(id){
    return feticeiros_jujutsu.findIndex(feticeiro => feticeiro.id == id);

}



// // Definindo uma rota padrão para a aplicação
// APP.get('/', (req, res) => {
//     // Quando alguém acessar a rota '/', o servidor responderá com 'Hello World'
//     res.send('Hello World');
// });

APP.get('/dados_feticeiros', (req, res) => {  
   // res.status(200).send(feticeiros_jujutsu);
   const sql = 'SELECT * FROM carteirinhas';
   conexao.query(sql, (erro, resultados) => {
    if(erro){
        res.status(404).json({'erro':erro});
    }
    else{
        res.status(200).json(resultados);
    }
})
});


APP.get('/dados_feticeiros/:id', (req, res) => { 
   // res.json(buscarFeticeiroID(req.params.id));
   const id  = req.params.id;
   const sql = 'SELECT * FROM carteirinhas WHERE id=?;';
   const linha = resultados[0]
   conexao.query(sql, id, (erro, resultados) => {
    if(erro){
        res.status(404).json({'erro':erro});
    }
    else{
        res.status(200).json(linha);
    }
})
});

APP.post('/dados_feticeiros', (req, res) => {
    feticeiros_jujutsu.push(req.body);
    res.status(201).send('Feticeiro cadastrado com sucesso!');
});
    
APP.delete('/dados_feticeiros/:id', (req, res) => {
    let index = buscarFeticeiroNome(req.params.id);
    feticeiros_jujutsu.splice(index, 1); 
    res.send(`feticeiro excluido com id ${req.params.id} excluido com sucesso! `);
}   
);
export default APP


