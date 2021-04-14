const express = require('express');
const server = express();
const port = 3000;

server.listen(port, () => {
    console.log(`rodando liso na porta ${port}`)
})

server.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
})
server.get('/login', (req, res) => {
    return res.sendFile(__dirname + "/views/login.html");
})
server.get('/esqueceu-senha', (req, res) => {
    return res.sendFile(__dirname + "/views/esqueceu-senha.html");
})
server.get('/criar-conta', (req, res) => {
    return res.sendFile(__dirname + "/views/criar-conta.html");
})

server.get('/dashboard', (req, res) => {
    return res.sendFile(__dirname + "/views/dashboard.html");
})