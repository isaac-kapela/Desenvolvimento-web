import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: "localhost",
    port:3306,  
    user: "kapela",
    password: "manzambi123",
    database: "db_jujutsu"
})
    
conexao.connect()


export default conexao;