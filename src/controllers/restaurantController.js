const Router = require('express').Router();
const RestaurantService = require("../services/restaurantService");

Router.post('/', RestaurantService.addRestaurant);
Router.get('/:id', RestaurantService.getRestaurantById);
Router.get('/all:code', RestaurantService.getAllRestaurant);
Router.get('/random:code', RestaurantService.getRamdomRestaurant);

module.exports = Router
