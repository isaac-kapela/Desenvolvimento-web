var pessoa = {
    nome: "Heculano",
    idade: 19,
    endereco: {
        rua: "rua x ",
        cep: "002903990"
    }
}

if(pessoa.endereco.cep == "002903990"){
    console.log("O valor do frete vai ser R$ 90")
} else {
    console.log("Sem frete")
}