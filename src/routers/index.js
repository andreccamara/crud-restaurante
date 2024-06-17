
const {Router} = require("express") 
const router = Router() 
const homeController = require('../controller/home') 
const loginController = require('../controller/logincontroler') 
const pratoControler = require('../controller/prato')
router.get('/', homeController.home) 

//rota de autenticação 
router.post('/login', loginController.autenticacao) 
router.get('/main', pratoControler.list) 

//crud de pratos:
router.get("/prato/form", pratoControler.form) 
router.post('/pratos/createPrato', pratoControler.createPrato) 
router.post('/pratos/excluir/:idprato', pratoControler.apagarPrato) 
router.get('/pratos/editar/:idprato', pratoControler.editarPrato) 
router.post('/pratos/alterar/:idprato', pratoControler.alterarPrato) 

module.exports = router 