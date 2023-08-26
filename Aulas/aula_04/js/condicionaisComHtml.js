var idade = prompt("Digite sua idade: ")

if(idade >= 18){
    document.writeln("É maior de idade.")
} else if(idade < 18){
    document.writeln("É menor de idade.")
} else{
    document.writeln("Digite uma idade válida.")
}