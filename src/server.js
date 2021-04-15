const express = require('express');
const server = express();
const routes = require('./routes')
const port = process.env.PORT || 3000;

//usará as rotas importadas.
server.use(routes);

server.listen(port, () => {
    console.log(`rodando liso na porta ${port}`)
})