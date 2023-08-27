var pessoa1 = {
    nome: "Julia",
    altura: 1.61
}

var pessoa2 = {
    nome: "Hercules", 
    altura: 1.70
}

var pessoa3 = {
    nome: "Erick",
    altura: 1.90
}

if(pessoa1.altura > pessoa2.altura && pessoa1.altura > pessoa3.altura && pessoa2.altura < pessoa1.altura && pessoa2.altura < pessoa3.altura){
    console.log(pessoa1.nome + " é mais alto(a) e " + pessoa2.nome + " é mais baixo(a). ")
} else if(pessoa1.altura > pessoa2.altura && pessoa1.altura > pessoa3.altura && pessoa3.altura < pessoa2.altura && pessoa3.altura < pessoa1.altura){
    console.log(pessoa1.nome + " é mais alto(a) e " + pessoa3.nome + " é mais baixo(a). ")

} else if(pessoa2.altura > pessoa1.altura && pessoa2.altura > pessoa3.altura && pessoa1.altura < pessoa2.altura && pessoa1.altura < pessoa3.altura){
    console.log(pessoa2.nome + " é mais alto(a) e " + pessoa1.nome + " é mais baixo(a). ")
} else if(pessoa2.altura > pessoa1.altura && pessoa2.altura > pessoa3.altura && pessoa3.altura < pessoa2.altura && pessoa3.altura < pessoa1.altura){
    console.log(pessoa2.nome + " é mais alto(a) e " + pessoa3.nome + " é mais baixo(a). ")

} else if(pessoa3.altura > pessoa2.altura && pessoa3.altura > pessoa1.altura && pessoa1.altura < pessoa2.altura && pessoa1.altura < pessoa3.altura){
    console.log(pessoa3.nome + " é mais alto(a) e " + pessoa1.nome + " é mais baixo(a). ")
} else if(pessoa3.altura > pessoa2.altura && pessoa3.altura > pessoa1.altura && pessoa2.altura < pessoa1.altura && pessoa2.altura < pessoa3.altura){
    console.log(pessoa3.nome + " é mais alto(a) e " + pessoa2.nome + " é mais baixo(a). ")
} else{
    console.log("Dados inválidos.")
}