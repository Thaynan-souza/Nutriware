const dbConnection = require('../../config/dbConnection');
const { getCarrinho } = require('../models/carrinhomodel');

module.exports.carrinho = (app, req, res) => {
    const dbConn = dbConnection();
    getCarrinho(dbConn, (error, result) => {
        console.log('[CArrinho  Controler]');
        if (error) {
            console.log('Erro: ' + error);
        }
        else {
            console.log('Sucesso!');
        }
        res.render('carrinho.ejs', { marmitas: result }); //Renderizo a view carrinho.ejs        
    });
}