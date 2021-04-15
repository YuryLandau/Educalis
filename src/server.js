const express = require('express');
const server = express();
const routes = require('./routes')
const port = process.env.PORT || 3000;

//habilitar arquivos estáticos
server.use(express.static("public"));
console.log(express.static("public"));

//usará as rotas importadas.
server.use(routes);

server.listen(port, () => {
    console.log(`rodando liso na porta ${port}`)
})