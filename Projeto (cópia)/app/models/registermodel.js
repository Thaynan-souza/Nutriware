module.exports = {
    getRegister: (dbConnection, callback) => {
        console.log('Model register');
        //Esse é o model que irá buscar todos os registros e consultas para listar na home
        const sql = "SELECT * FROM marmitas';";
        dbConnection.query(sql, callback);
    }
}
