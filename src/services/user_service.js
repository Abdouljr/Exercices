const { verify } = require('jsonwebtoken');
const User = require('../models/user');


module.exports = {

    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.user.id);
            const {password, __v, createdAt, ...userData} = user._doc;

            res.status(200).json(userData);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },


    verifyAccount: async(req, res) => {
     const userOtp = req.params.otp;
     try {
        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(400).json({status: false, message: "Utilisateur non trouvé"});
        }

        if(userOtp === user.otp){
            user.verification = true;
            user.otp = 'none';

            await user.save();

            const {password, __v, otp, createdAt, ...others} = user._doc;

            return res.status(200).json({...others});
        }else{

            res.status(400).json({status: false, message: "La verification de l'otp a échoué"});
        }
     } catch (error) {
        res.status(500).json({status: false, message: error.message});
     }
    },

    verifyPhone: async(req, res)=>{
        const phone = req.params.phone;

        try {
            const user = await User.findById(req.user.id);

        if(!user){
            return res.status(400).json({status: false, message: "Utilisateur non trouvé"});
        };


            user.phoneVerification = true;
            user.phone = phone;

            await user.save();

            const {password, __v, otp, createdAt, ...others} = user._doc;

            return res.satatus(200).json({...others});
    
        } catch (error) {
            res.satatus(500).json({status: false, message: error.message});
        };
    },

    deleteUser: async(req, res) => {

        try {
            await User.findByIdAndDelete(req.user.id);
            res.status(200).json({status: true, message: "utilisateur supprimé avec succés"});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },
}