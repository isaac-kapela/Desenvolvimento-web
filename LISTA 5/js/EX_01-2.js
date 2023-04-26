let pessoa = {
    nome: 'fulano',
    idade: 20,
    ehAdmin: true,
    email: 'fulano@gmail.com'
}
for (let pessoa of pessoa){
    if (pessoa.ehAdmin == true) {
        console.log('Olá'+ pessoa.nome+ 
        '! Bem vindo(a) você é admin do sistema, enviamos um email para'
        + email+'para você criar uma senha')
    }

    else if (pessoa.ehAdmin != true) {
        console.log('Olá' + pessoa.nome +
            '! Bem vindo(a) você não é adimn do sistema, enviamos  um email para'
            + pessoa.email + 'para você criar uma senha')
        } 
}