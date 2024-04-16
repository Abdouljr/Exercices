const Router = require('express').Router();
const RatingService = require("../services/rating_service");

Router.post('/', RatingService.addRating);
Router.get('/', RatingService.checkUserRating);
module.exports = Router
