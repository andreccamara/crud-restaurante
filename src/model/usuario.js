const conexao = require('../connection/conexao');
const session = require('express-session');

module.exports = {
    verificacao: (email, senha) => {
        console.log('model')
        return new Promise((resolve, reject) => {
            conexao.query('SELECT * FROM usuario WHERE senha = ? and  email = ? ', [senha,email], (error, results) => {
                console.log('x')
                if (error) {
                    reject(new Error('falha na conexao'));
                    return;
                }
                if (results.length === 0) {
                    console.log('nao encontrado')
                    reject(new Error('User not found'));
                    return;
                }
                const usuario = results[0];

                // Store user details in session 
                session.idusuario = usuario.idusuario;
                session.nome = usuario.nome;
                console.log("Sucesso ao entrar !!");
                resolve(usuario);
            });
        });
    }
}
