let pessoas = [
    pessoa1 = {
        nome: "Letícia",
        idade: 18,
        ehAdmin: true,
        email: "leticiafrancielle207@gmail.com"
    },
    pessoa2 = {
        nome: "Billy",
        idade: 3,
        ehAdmin: false,
        email: "billynho@gmail.com"
    },
    pessoa3 = {
        nome: "Don Toliver",
        idade: 25,
        ehAdmin: true,
        email:  "donzinho123@gmail.com"
    },
    pessoa4 = {
        nome: "Kali Uchis",
        idade: 30,
        ehAdmin: true,
        email: "uchiskali@gmail.com"
    },
    pessoa5 = {
        nome: "Ana Carolina",
        idade: 13,
        ehAdmin: false,
        email: "carolinazinha@gmail.com"
    }
]

for(let pessoa of pessoas) {
    if (pessoa.ehAdmin){
        console.log("Olá " + pessoa.nome + " Bem vindo(a) você é admin do sistema, enviamos um email para " 
        + pessoa.email + " para você criar uma senha \n")
    }else{
         console.log("Olá " + pessoa.nome + "! Bem vindo(a) você não é admin do sistema, enviamos um email para "
          + pessoa.email + " para você criar uma senha \n")
    }
}