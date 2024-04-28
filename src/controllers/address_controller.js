const Router = require('express').Router();
const AddressService = require("../services/address_service");
const {verifyTokenAndAuthorization} = require("../middleware/verify_token");

Router.post('/', verifyTokenAndAuthorization, AddressService.addAddress);
Router.get('/default', verifyTokenAndAuthorization, AddressService.getDefaultAddress);
Router.delete('/:id', verifyTokenAndAuthorization, AddressService.deleteAddress);
Router.get('/all', verifyTokenAndAuthorization, AddressService.getAddresses);
Router.patch('/default/:id', verifyTokenAndAuthorization, AddressService.setAddressDefault);
module.exports = Router
