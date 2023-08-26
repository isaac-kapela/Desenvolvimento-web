import Pessoa from "./pessoa";

let pessoa = new Pessoa("Fulano", 10)
console.log(`${pessoa.getNome()} tem ${pessoa.getIdade()} anos`)


import Gato  from "./gato";

let gato = new Gato()
console.log(gato.emitirSom())