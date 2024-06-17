const mysql = require("mysql")
const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "restaurante_dede_e_leo"
})
module.exports = conexao 
