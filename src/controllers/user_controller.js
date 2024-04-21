const Router = require('express').Router();
const UserService = require("../services/user_service");

Router.get('/', UserService.getUser);
Router.delete('/', UserService.deleteUser);
Router.get('/verify/:otp', UserService.verifyAccount);
Router.get('verify_phone/:phone', UserService.verifyPhone);
module.exports = Router
