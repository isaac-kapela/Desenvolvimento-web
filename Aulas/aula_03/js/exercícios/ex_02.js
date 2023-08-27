//Criar 3 objetos que represente 3 empresas 
// O objeto deve ter:
    // nome da empresa 
    // CNPJ - Use informacões fictícias 
    // tipo de empresa (banco, farmacia, mercado)
    // quantidade de funcionarios 

// Adicione esses objetos em uma lista (a lista deve ser criada vazia)
// Imprimir a lista no console

var empresa1 = {
    nome: "Gol no Gol",
    cnpj: 98086987,
    tipoDeEmpresa: "loja",
    quantidadeFuncionarios: 17
}

var empresa2 = {
    nome: "Banco gatito ",
    cnpj: 40028922,
    tipoDeEmpresa: "banco",
    quantidadeFuncionarios: 19
}

var empresa3 = {
    nome: "Mercadinho gatito",
    cnpj: 01100110,
    tipoDeEmpresa: "mercado",
    quantidadeFuncionarios: 15
}

var empresas = []
empresas.push(empresa1)
empresas.push(empresa2)
empresas.push(empresa3)

console.log(empresas)