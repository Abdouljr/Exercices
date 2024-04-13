const Router = require('express').Router();
const FoodService = require("../services/food_service");

Router.post('/', FoodService.addFood);
Router.get('/:id', FoodService.getFoodById);
Router.get('/ramdom/:code', FoodService.getRandomFood);
Router.get('/:category/:code', FoodService.getFoodsByCategoryAndCode);
Router.get('/search/:search', FoodService.searchFoods);
Router.get('/recommendation:code', FoodService.getRandomFood);
Router.get('/restaurant-foods/:id', FoodService.getFoodsByRestaurant);

module.exports = Router
