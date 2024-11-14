const dbConnection = require('../../config/dbConnection'); // Importa a conexão com o banco de dados

module.exports = {
    // Função para retornar todos os dados de login (não utilizada diretamente no login)
    getLogin: (dbConnection, callback) => {
        console.log('[Model] Consultando todos os registros de login');
        // Executa a callback após a consulta (exemplo de implementação)
        callback();
    },

    // Função para encontrar o usuário pelo e-mail
    findUserByEmail: (email, callback) => {
        const db = dbConnection(); // Cria a conexão com o banco de dados
        const query = 'SELECT * FROM users WHERE email = ?'; // Consulta no banco para buscar o usuário por email

        db.query(query, [email], (error, results) => {
            if (error) {
                return callback(error, null); // Retorna erro se houver
            }

            // Retorna o usuário encontrado, incluindo os dados das colunas (como 'adm')
            callback(null, results[0]); // 'results[0]' traz o primeiro (e único) usuário encontrado
        });
    }
};
