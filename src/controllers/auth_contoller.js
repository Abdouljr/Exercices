const Router = require('express').Router();
const AuthService = require("../services/auth_service");

Router.post('/register', AuthService.createUser);
Router.get('/login', AuthService.loginUser);
module.exports = Router
