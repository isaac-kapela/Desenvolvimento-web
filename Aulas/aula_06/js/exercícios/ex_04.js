function informacoesPessoais(pessoa){
    console.log("Bem vindo(a)! " + pessoa.nome + " " +  pessoa.sobrenome + " você tem " + pessoa.idade + " anos, suas informações de contato são: " +
    pessoa.telefone + "\n" + "endereços cadastro: " + pessoa.endereco )
}

let pessoa1 = {
    nome: "Letícia",
    sobrenome: "Francielle",
    idade: 18,
    endereco: [ "rua x", "rua y"],
    telefone: [ 988405566, 911098877]
}

informacoesPessoais(pessoa1)
