const conexao = require('../connection/conexao');
const session = require('express-session');

module.exports = {

    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            conexao.query('SELECT * FROM prato',
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log("Sucesso ao listar ao prato!!")
                    resolve(results)
                });
        });
    },

    inserirPrato: (nome, preco) => {
        return new Promise((resolve, reject) => {
            conexao.query('INSERT INTO prato (nome,preco) VALUES (?,?)', [nome, preco],
                (error, results) => {
                    if (error) { reject(new Error('erro na conexao')); }

                    console.log("Sucesso ao cadastrar prato!!")
                    resolve(results)
                });
        });
    },

    editar: (idprato) => {
        return new Promise((resolve, reject) => {
            conexao.query('SELECT * FROM prato WHERE idprato = ?',
                [idprato],
                (error, results) => {
                    if (error) { reject(error); return; }
                    //console.log(results) 
                    resolve(results[0])
                });
        });
    },
    alterar: (idprato, nome, preco) => {
        console.log("Dados recebidos para alteração:", "idprato:", idprato,"nome:", nome,"preco:", preco);
    
        return new Promise((resolve, reject) => {
            conexao.query(
                'UPDATE prato SET nome = ?, preco = ? WHERE idprato = ?',
                [nome, preco, idprato],
                (error, results) => {
                    if (error) {
                        console.error("Erro ao executar UPDATE:", error);
                        reject(error);
                        return;
                    }
                    console.log("Sucesso ao editar prato. Linhas afetadas:", results.affectedRows);
                    resolve(results);
                }
            );
        });
    },
    
    delete: (idprato) => {
        return new Promise((resolve, reject) => {
            conexao.query('DELETE FROM prato WHERE idprato = ?',
                [idprato],
                (error, results) => {
                    if (error) { reject(error); return; }
                    console.log("Sucesso ao excluir prato!!")
                    resolve(results)
                });
        });
    }
} 
    
