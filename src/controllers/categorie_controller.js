const Router = require('express').Router();
const CategorieService = require('../services/categorie_service');

Router.post('/', CategorieService.addCategorie);
Router.get('/all', CategorieService.getAllCategorie);
Router.get('/random', CategorieService.getrandomCategorie);

module.exports = Router