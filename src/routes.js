const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.sendFile(__dirname + "/views/index.html");
})
routes.get('/login', (req, res) => {
    return res.sendFile(__dirname + "/views/login.html");
})
routes.get('/esqueceu-senha', (req, res) => {
    return res.sendFile(__dirname + "/views/esqueceu-senha.html");
})
routes.get('/criar-conta', (req, res) => {
    return res.sendFile(__dirname + "/views/criar-conta.html");
})

routes.get('/dashboard', (req, res) => {
    return res.sendFile(__dirname + "/views/dashboard.html");
})

routes.get('/index.html', (req, res) => {
    return res.redirect("/");
})

module.exports = routes;