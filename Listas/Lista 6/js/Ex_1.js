function maiorIdade(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade >= 18) {
            console.log("Seja  bem vindo(a)! Você se chama " + pessoas[i].nome +
                " " + pessoas[i].sobrenome + " e tem " + pessoas[i].idade + " anos e é maior de idade.")
        } else {
            console.log("Seja  bem vindo(a)! Você se chama " + pessoas[i].nome +
                " " + pessoas[i].sobrenome + " e tem " + pessoas[i].idade + " anos e não é maior de idade.")
        }
    }
}

function verificaNome(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].nome.length && pessoas[i].sobrenome.length < 3) {
            console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres.")

        } else if (pessoas[i].nome.length && pessoas[i].sobrenome.length > 50) {
            console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres. ")

        } else {
            console.log("Nome válido.")
        }
    }
    return
}


function quantidadePessoas(pessoas) {
    console.log(pessoas.length)
}

let listaPessoas = [
    {
        nome: "Fulano",
        sobrenome: "santos",
        idade: 29
    },
    {
        nome: "Ciclano",
        sobrenome: "ribeiro",
        idade: 34
    },
    {
        nome: "Beltrano",
        sobrenome: "Silva",
        idade: 18
    },
    {
        nome: "Merculano",
        sobrenome: "Menzes",
        idade: 11
    },
    {
        nome: "Minuano",
        sobrenome: "Sousa",
        idade: 20
    }
]


maiorIdade(listaPessoas)
verificaNome(listaPessoas)
quantidadePessoas(listaPessoas)


