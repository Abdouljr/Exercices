const Router = require('express').Router();
const CategoryController = require('../controllers/category_controller');

Router.post('/', CategoryController.createCategory);
Router.get('/', CategoryController.getAllCategories);
Router.get('/random', CategoryController.getRandomCategories);

module.exports = Router