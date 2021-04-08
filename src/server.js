const express = require('express');
const server = express();
const port = 3000;

server.listen(port, () => {
    console.log(`rodando liso na porta ${port}`)
})

server.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
})