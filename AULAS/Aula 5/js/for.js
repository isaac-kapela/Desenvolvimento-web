var tarefas = [
    'lavar louça',
    'lavar roupa',
    'fazer compra',
    'limpar a casa'
]
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i] == "limpar a casa") {
        break
    }
    console.log(tarefas[i])
}

for (var x = 0; x < numeros.length; x++) {
    if (numeros[x] % 2 == 0) {
        console.log(numeros[x] + 'e par')
    }

    else{
        console.log('é impar')
    }
 }