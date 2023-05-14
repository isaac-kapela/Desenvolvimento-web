 var contaCorrente = {
    saldo : 7000,
    faturaAtual : 800,
    creditoDisponivel : 3000,

    Extrato : {
        entradas : [
            {
                data : '17/03/2023',
                valor : 3000
            }
        ],
    
         saidas : [
    
            {
                data : '14/05/2023',
                valor : 200,
                descricao : 'Restaurante'
            }
         ] 
    },
    exbibirExtrato : Boolean(true)
 }

 if( faturaAtual < saldo){
    console.log('Você possui saldo para pagar a fatura atual')
 } else if(faturaAtual > saldo){
    console.log('Você não possui saldo suficiente para pagar a fatura, Experimente pegar credito para conseguir pagar!!' )
    console.log(creditoDisponivel )
 }
 else if(exbibirExtrato == true){
    console.log('Aqui esta o seu extrato bancario' + exbibirExtrato)
 }
else{
    console.log('aconteceu um erro na transação.... tente novamente')
}
