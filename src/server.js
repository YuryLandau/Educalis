const express = require('express');
const server = express();
const routes = require('./routes')
const port = 3000;

server.listen(port, () => {
    console.log(`rodando liso na porta ${port}`)
})

//habilitar arquivos estáticos
server.use(express.static("public"));

//usará as rotas importadas.
server.use(routes);