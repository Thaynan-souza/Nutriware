const { home } = require('../controllers/homecontroller');
const { dashboard, deleteMarmitas, editMarmitas, updateMarmita } = require('../controllers/dashboardcontroller');
const { login, loginUser } = require('../controllers/logincontroller');
const { register } = require('../controllers/registercontroller');
const { carrinho } = require('../controllers/carrinhocontroller');


module.exports = {
    // Rota para a página inicial
    home: (app) => {
        app.get('/', function (req, res) {
            home(app, req, res);
        });
    },

    // Rota para a página de Carrinho
    carrinho: (app) => {
        app.get('/carrinho', function (req, res) {
            carrinho(app, req, res);
        });
    },
    // Rota para a página de Cadastro
    register: (app) => {
        app.get('/register', function (req, res) {
            register(app, req, res);
        });
    },

    // Rota para a página do dashboard
    dashboard: (app) => {
        app.get('/dashboard', function (req, res) {
            dashboard(app, req, res);
        });

        // Rota POST para deletar uma marmita
        app.post('/dashboard/deletar/:id', function (req, res) {
            deleteMarmitas(app, req, res);  // Chama a função de deletar
        });

        // Rota para editar uma marmita (GET)
        app.get('/dashboard/editar/:id', function (req, res) {
            editMarmitas(app, req, res);  // Exibe o formulário de edição
        });

        // Rota para atualizar a marmita (POST)
        app.post('/dashboard/atualizar/:id', function (req, res) {
            updateMarmita(app, req, res);  // Processa a atualização no banco
        });
    },

    // Rota GET para exibir a página de login
    login: (app) => {
        app.get('/login', function (req, res) {
            login(app, req, res);
        });

        // Rota POST para processar o formulário de login
        app.post('/login', function (req, res) {
            loginUser(req, res);
        });
    },
};
