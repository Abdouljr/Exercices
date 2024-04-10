const Router = require('express').Router();
const CategorieService = require('../services/categorie_service');

Router.post('/', CategorieService.add);
Router.get('/', CategorieService.getAll);
Router.get('/random', CategorieService.random);

module.exports = Router