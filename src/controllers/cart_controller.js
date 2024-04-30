const Router = require('express').Router();
const CartService = require("../services/cart_service");
const {verifyTokenAndAuthorization} = require("../middleware/verify_token");

Router.post('/', verifyTokenAndAuthorization, CartService.addProductToCart);
Router.get('/', verifyTokenAndAuthorization, CartService.getCart);
Router.get('/decrement/:id', verifyTokenAndAuthorization, CartService.decrementProductQty);
Router.delete('/:id', verifyTokenAndAuthorization, CartService.removeCartItem);
Router.get('/count', verifyTokenAndAuthorization, CartService.getCartCount);
module.exports = Router
 