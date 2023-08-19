var pessoa1 = {
    nome: "Julia",
    idade: 30
}

var pessoa2 = {
    nome: "Hercules", 
    idade: 60
}

var pessoa3 = {
    nome: "Erick",
    idade: 18 
}

if(pessoa1.idade > pessoa2.idade && pessoa1.idade > pessoa3.idade){
    console.log("A pessoa mais velha é: " + pessoa1.nome)
} else if(pessoa2.idade > pessoa1.idade && pessoa2.idade > pessoa3.idade){
    console.log("A pessoa mais velha é: " + pessoa2.nome)
} else if(pessoa3.idade > pessoa1.idade && pessoa3.idade > pessoa2.idade){
    console.log("A pessoa mais velha é: " + pessoa3.nome)
} else{
    console.log("Idade iválida tente novamente")
} 