const prato = require('../model/prato');
const usuario = require('../model/usuario');

const bcrypt = require('bcryptjs');
const session = require('express-session');
module.exports = {
    autenticacao: async (req, res) => {
        const email = req.body.email;
        const senha = req.body.senha;
        console.log(email, senha)
        try {
            const user = await usuario.verificacao(email, senha);
            if (user) {
                res.redirect('/main');
            } else {
                res.send('Email ou senha incorretos!');
            }
        } catch (error) {
            console.error('Erro na autenticação:', error);
            res.status(500).send('email ou senha errados');
        }
    },
}
