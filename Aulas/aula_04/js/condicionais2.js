var nome = "admin"
var senha = "admin"

if(senha == "password" && nome == "admin"){
    console.log("Bem vindo ao sistema | Você é o admin")
}else if(senha == "password" || nome == "admin"){
    console.log("Bem vindo ao sistema | Você não é o admin, e tem menos acessos.")
}