const mysql = require('mysql2');

const host = 'localhost';
const database = 'nutriware';
const user = 'root';
const password = 'Kl@paucius11';

module.exports = () => {
    return dbConn = mysql.createPool({
        host: host,
        database: database,
        user: user,
        password: password
    });
};