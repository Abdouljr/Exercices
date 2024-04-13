const Router = require('express').Router();
const RestaurantService = require("../services/restaurant_service");

Router.post('/', RestaurantService.addRestaurant);
Router.get('/byId/:id', RestaurantService.getRestaurantById);
Router.get('/all/:code', RestaurantService.getAllRestaurant);
Router.get('/random/:code', RestaurantService.getRamdomRestaurant);

module.exports = Router
