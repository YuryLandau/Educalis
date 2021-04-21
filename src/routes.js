const express = require('express');
const routes = express.Router();
var objeto = { 
    primeiro:"Disciplina",
    segundo:"Calendário",
    terceiro:"Boletim" 
}

routes.get('/', (req, res) => {
    return res.render("index");
})
routes.get('/login', (req, res) => {
    return res.render("login");
})
routes.get('/esqueceu-senha', (req, res) => {
    return res.render("esqueceu-senha");
})
routes.get('/criar-conta', (req, res) => {
    return res.render("criar-conta");
})

routes.get('/dashboard', (req, res) => {
    return res.render("dashboard", { objeto });
})

module.exports = routes;