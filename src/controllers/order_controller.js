const Router = require('express').Router();
const OrderService = require("../services/order_service");
const {verifyTokenAndAuthorization} = require("../middleware/verify_token");

Router.post('/', verifyTokenAndAuthorization, OrderService.placeOrder);
Router.get('/', verifyTokenAndAuthorization, OrderService.getUserOrders);
module.exports = Router