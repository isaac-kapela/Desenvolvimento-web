//Servidor.js

import APP from "./APP.js";

// Definindo a porta em que o servidor irá escutar
const PORTA = 5000;

    // Iniciando o servidor e fazendo-o escutar na porta especificada
    APP.listen(PORTA, () => {
        // Quando o servidor estiver rodando, essa função será chamada, imprimindo uma mensagem
        console.log(`Servidor rodando no endereço http://localhost:${PORTA}`)
});