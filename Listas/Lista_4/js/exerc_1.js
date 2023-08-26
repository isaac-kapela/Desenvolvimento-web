var contaCorrente = {
    saldo: 2000,
    faturaAtual: 4000,
    creditoDisponivel: 2000,
    extrato:{
        entrada:[
            {data: "2 de janeiro", valor:2000},
            {data: "25 de maio", valor: 90}
        ],
        saida:[
            {data: "3 de outubro", valor: 300,descricao: "Cinema"},
            {data: "1 de fevereiro", valor: 400, descricao: "Restaurante"}
        ]
    },
    exibirExtrato: true
}

if(contaCorrente.saldo > contaCorrente.faturaAtual){
    console.log("Você possui saldo para pagar a fatura atual.")
}else{
    console.log("Você não possui saldo suficiente para pagar a fatura atual.\nExperimente pegar crédito para conseguir pagar.\nValor de crédito disponível: " + contaCorrente.creditoDisponivel)
}
if(contaCorrente.exibirExtrato){
    console.log(contaCorrente.extrato)
}