const prato = require('../model/prato');
const usuario = require('../model/usuario');

const bcrypt = require('bcryptjs');
const session = require('express-session');

module.exports = {
    //listar os pratos em main
    list: async (req, res) => {
        nome = session.nome
        const pratos = await prato.buscarTodos()
        return res.render('main', { pratos, nome })
    },
    //acessar o formulario
    form: (_, res) => {
        res.render('formprato')
    },
    //crud
    createPrato: async (req, res) => {
        let nome = req.body.nome
        let preco = req.body.preco
        await prato.inserirPrato(nome, preco)
        return res.redirect('/main')
    },
    alterarPrato: async (req, res) => {
        let idprato = req.params.idprato
        let nome = req.body.nome
        let preco = req.body.preco
        //console.log(id_turma) 
        await prato.alterar(idprato, nome, preco)
        return res.redirect('/main')
    },
    editarPrato: async (req, res) => {
        let idprato = req.params.idprato
        const prato2 = await prato.editar(idprato)
        //console.log(turma) 
        res.render('formEditarprato', { prato2 })
    },
    apagarPrato: async (req, res) => {
        let idprato = req.params.idprato
        await prato.delete(idprato)
        return res.redirect('/main')
    }

}