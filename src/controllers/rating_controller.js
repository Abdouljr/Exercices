const Router = require('express').Router();
const RatingService = require("../services/rating_service");
const {verifyTokenAndAuthorization} = require("../middleware/verify_token");

Router.post('/', verifyTokenAndAuthorization, RatingService.addRating);
Router.get('/', verifyTokenAndAuthorization, RatingService.checkUserRating);
module.exports = Router
