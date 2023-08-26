var idade = prompt("Digite sua idade")

if(idade >= 18) {
    document.writeln("é maior de idade")
} else if (idade < 18 && idade > 0) {
    document.writeln("é menor de idade")
} else {
    document.writeln("Digite uma idade valida")
}
