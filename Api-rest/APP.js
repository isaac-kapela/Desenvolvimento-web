// Importando o módulo 'express' e atribuindo-o à variável 'express'
import express from 'express';
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
const feticeiros_jujutsu = [
    {
        id: 1,
        nome: 'Satoru gojo',
        habilidade:'infinto e os 6 olhos',
        grau: 'especial',
        possui_expansao : true
    },
    {
        id: 2,
        nome: 'sukuna',
        habilidade:'Clivar',
        grau: 'especial',
        possui_expansao: true
    },
    {
        id: 3,
        nome: 'megumi',
        habilidade:'10 sombras',
        grau:'1',
        possui_expansao:true

    },
    {
        id: 4,
        nome: 'Aoi todou',
        habilidade:'Boogie Woogie',
        grau:'1',
        possui_expansao:false
    },
    {
        id: 5,
        nome: 'Maki zenin',
        habilidade:'Restrição celestial',
        grau:'1',
        possui_expansao: false
    },
    {
        id: 6,
        nome: 'Yuta',
        habilidade:'copia',
        grau:'especial',
        possui_expansao: true
    },
    

];



// Definindo uma rota padrão para a aplicação
APP.get('/', (req, res) => {
    // Quando alguém acessar a rota '/', o servidor responderá com 'Hello World'
    res.send('Hello World');
});

APP.get('/dados_feticeiros', (req, res) => {  
    res.status(200).send(feticeiros_jujutsu);
});


APP.get('/dados_feticeiros/:id', (req, res) => { 
    res.json(buscarFeticeiroID(req.params.id));
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