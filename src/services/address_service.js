const Address = require("../models/address");
const User = require("../models/user");


module.exports = {

    addAddress: async(req, res) => {
        const newAddress = new Address({
            userId: req.user.id,
            addressLine1: req.body.addressLine1,
            postalCode: req.body.postalCode,
            default: req.body.default,
            deliveryInstructions: req.body.deliveryInstructions,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });
        try {
            if(req.body.default){
                await Address.updateMany({userId: req.user.id, default: true}, {default: false});
            };
            await newAddress.save();
            res.status(201).json({status: true, message: 'Adresse ajoutée avec success'});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getAddresses: async(req, res) => {
        try {
            const addresses = await Address.find({userId: req.user.id});
            res.status(200).json(addresses);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    deleteAddress: async(req, res) => {
        try {
            await Address.findByIdAndDelete(req.params.id);
            res.status(200).json({status: true, message: 'Adresse supprimée avec success'});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    setAddressDefault: async(req, res) => {
        const userId = req.user.id;
        const addressId = req.params.id;
        try {
            await Address.updateMany({userId: userId, default: true}, {default: false});
            const updateAddress = await Address.findByIdAndUpdate(addressId, {default: true});
            
            if(updateAddress){
                await User.findByIdAndUpdate(userId, {address: addressId});
                res.status(200).json({status: true, message: 'Adresse mise à jour avec success'});
            }
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getDefaultAddress: async(req, res) => {
        const userId = req.user.id;
        try {
            const address = await Address.findOne({userId: userId, default: true});
            res.status(200).json(address);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}