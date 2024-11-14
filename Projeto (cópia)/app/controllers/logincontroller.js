const dbConnection = '';
const { getLogin } = require('../models/loginmodel');

module.exports.login = (app, req, res) => {
    console.log('Controller login');
    getLogin(dbConnection, (error, result) => {
        //enviar o resultado para a view
        res.render('login.ejs');
    });
}
// loginController.js

const { findUserByEmail } = require('../models/loginmodel'); // Importa a função do model

// Função para processar o login do usuário
module.exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('login.ejs', { error: 'E-mail e senha são obrigatórios!' });
    }

    // Consulta ao banco de dados para encontrar o email
    findUserByEmail(email, (error, user) => {
        if (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.render('login.ejs', { error: 'Erro ao buscar o E-mail. Tente novamente.' });
        }

        if (!user) {
            return res.render('login.ejs', { error: 'Nome de usuário não encontrado.' });
        }

        // Verifica se a senha é correta
        if (user.password !== password) {
            return res.render('login.ejs', { error: 'Senha incorreta.' });
        }

        // Verifica o nível de acesso do usuário com base na coluna 'adm'
        if (user.adm === 1) {
            // Usuário é administrador; redireciona para o dashboard
            return res.redirect('/dashboard');
        } else {
            // Usuário não é administrador; redireciona para a página de compras
            return res.redirect('/carrinho');
        }
    });
};
