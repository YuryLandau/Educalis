const express = require('express');
const server = express();
const routes = require('./routes')
const port = 3000;

//Usando template engine
server.set("view engine", "ejs");
server.set('views', __dirname + '/views'); //informando para o ejs qual a pasta dos views.

//habilitar arquivos estáticos
server.use(express.static("public"));

//usará as rotas importadas.
server.use(routes);

server.listen(port, () => {
    console.log(`rodando liso na porta ${port}`)
})