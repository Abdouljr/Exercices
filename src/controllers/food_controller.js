const Router = require('express').Router();
const FoodService = require("../services/food_service");
const {verifyVendor} = require("../middleware/verify_token");

Router.post('/', verifyVendor, FoodService.addFood);
Router.get('/:id', FoodService.getFoodById);
Router.get('/recommendation/:code', FoodService.getRandomFood);
Router.get('/restaurant-foods/:id', FoodService.getFoodsByRestaurant);
Router.get('/search/:search', FoodService.searchFoods);
Router.get('/:category/:code', FoodService.getFoodsByCategoryAndCode);
module.exports = Router
