const dbConnection = require('../../config/dbConnection');
const { getRegister } = require('../models/registermodel');

module.exports.register = (app, req, res) => {
    const dbConn = dbConnection();
    getRegister(dbConn, (error, result) => {
        console.log('register  Controler]');
        if (error) {
            console.log('Erro: ' + error);
        }
        else {
            console.log('Sucesso!');
        }
        res.render('register.ejs', { marmitas: result }); //Renderizo a view register.ejs        
    });
}