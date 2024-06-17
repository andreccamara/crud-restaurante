
const express = require('express');

const path = require('path');

//const bodyParser = require('body-parser'); 
const router = require('./routers/index');

const session = require('express-session');
const db = require('./connection/conexao');


const app = express();

//Configurações do serviço 

//app.use(bodyParser.json()); 
app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true})); 


// Configuração da sessão depois da configuração de serviço 
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));


app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

app.use(router)

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => { console.log('http://localhost:8080') })


