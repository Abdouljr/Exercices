const Router = require('express').Router();
const UserService = require("../services/user_service");
const { verifyTokenAndAuthorization} = require("../middleware/verify_token");

Router.get('/', verifyTokenAndAuthorization, UserService.getUser);
Router.delete('/', verifyTokenAndAuthorization, UserService.deleteUser);
Router.get('/verify/:otp', verifyTokenAndAuthorization, UserService.verifyAccount);
Router.get('verify_phone/:phone', verifyTokenAndAuthorization, UserService.verifyPhone);
module.exports = Router
