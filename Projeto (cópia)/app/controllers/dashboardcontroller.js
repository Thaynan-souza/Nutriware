// app/controllers/dashboardcontroller.js
const dbConnection = require('../../config/dbConnection');
const { getMarmitas, deleteMarmitasFromDb, getMarmitasById, updateMarmitasInDb } = require('../models/dashboardmodel');

// Função para exibir o dashboard com todas as marmitas
module.exports.dashboard = (app, req, res) => {
    const dbConn = dbConnection(); // Cria a conexão com o banco de dados

    getMarmitas(dbConn, (error, marmitas) => {
        if (error) {
            console.log('Erro ao buscar as marmitas:', error);
            res.render('error.ejs');  // Renderiza a página de erro caso ocorra algum problema
        } else {
            res.render('dashboard.ejs', { marmitas });  // Exibe o dashboard com as marmitas
        }
    });
};

// Função para deletar uma Marmita do banco de dados
module.exports.deleteMarmitas = (app, req, res) => {
    const marmitaId = req.params.id;  // Obtém o ID da marmita a ser deletada
    const dbConn = dbConnection();

    deleteMarmitasFromDb(dbConn, marmitaId, (error, result) => {
        if (error) {
            console.log('Erro ao deletar a marmita:', error);
            res.redirect('/dashboard');  // Redireciona para o dashboard caso ocorra erro
        } else {
            console.log('Marmita deletada com sucesso!');
            res.redirect('/dashboard');  // Redireciona para o dashboard após a exclusão
        }
    });
};

// Função para exibir o formulário de edição diretamente no dashboard
module.exports.editMarmitas = (app, req, res) => {
    const marmitaId = req.params.id;  // Obtém o ID da Marmita
    const dbConn = dbConnection();

    getMarmitasById(dbConn, marmitaId, (error, marmita) => {
        if (error) {
            console.log('Erro ao buscar marmita para editar:', error);
            res.redirect('/dashboard');  // Redireciona caso ocorra erro
        } else {
            // Passa a marmita para o dashboard para renderizar a edição diretamente na mesma página
            getMarmitas(dbConn, (error, marmitas) => {
                if (error) {
                    console.log('Erro ao buscar marmitas:', error);
                    res.render('error.ejs');
                } else {
                    res.render('dashboard.ejs', { marmitas, editMarmita: marmita });  // Passa os dados para o dashboard
                }
            });
        }
    });
};

// Função para atualizar os dados da marmita
module.exports.updateMarmita = (app, req, res) => {
    const marmitaId = req.params.id;  // Obtém o ID da Marmita
    const { sabor, descricao, preco, urlimagem } = req.body;  // Pega os dados do formulário
    const dbConn = dbConnection();

    updateMarmitasInDb(dbConn, marmitaId, { sabor, descricao, preco, urlimagem }, (error, result) => {
        if (error) {
            console.log('Erro ao atualizar Marmita:', error);
            res.redirect(`/dashboard/editar/${marmitaId}`);  // Redireciona para o formulário de edição em caso de erro
        } else {
            console.log('Marmita atualizada com sucesso!');
            res.redirect('/dashboard');  // Redireciona para o dashboard após a atualização
        }
    });
};
