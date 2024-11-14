let express = require('express'); // O express retorna uma função
let app = express(); // express é uma função.
let port = 3000;

// Configuração da view engine EJS
app.set('view engine', 'ejs');
app.set('views', './app/views'); //Define onde as views estão armazenadas

// Middleware para servir arquivos estáticos (CSS)
// app.use(express.static(_dirname + '/public))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
	console.log('Servidor rodando com express na porta', port);
});

module.exports = app;

