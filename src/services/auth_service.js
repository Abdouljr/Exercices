const User = require("../models/user");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const generateOtp = require('../utils/otp_generator');
const sendEmail = require('./src/utils/smtp_function');
module.exports = {
    createUser: async(req, res) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(req.body.email)){
            return res.status().json({status: false, message: "l'email est invalide"});
        }

        const minPasswordLength = 8;
        
        if(req.body.password.length < minPasswordLength){
            return res.status(400).json({status: false, message: "Le mot de passe doit avoir au moins " + minPasswordLength + " caractères"})
        }

        try {
        // GÉNÉRER OTP
        const otp = generateOtp();

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET),
            otp: otp
        });

        
        
        // ENREGISTER L'UTILISATEUR
        await newUser.save();
        
        // ENVOYER L'OTP PAR EMAIL
        sendEmail(newUser.email, otp);

        res.status(202).json({status: true, message: "Utilisateur créer avec succés"});
        
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        
        }

    },
    loginUser: async(req, res) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(req.body.email)){
            return res.status().json({status: false, message: "l'email est invalide"});
        }

        const minPasswordLength = 8;
        
        if(req.body.password.length < minPasswordLength){
            return res.status(400).json({status: false, message: "Le mot de passe doit avoir au moins " + minPasswordLength + " caractères"})
        }

        try {
            const user = await User.findOne({email: req.body.email});

            if(!user){
                return res.status(400).json({status: false, message: "Utilisateur non trouvé"});
            }
            
            const decryptedPassword = CryptoJS.decrypt(user.password, process.env.SECRET);
            const depassword = decryptedPassword.toString(CryptoJS.enc.Utf8);
            
            if(depassword !== req.body.password){
                return res.status(400).json({status: false, message: "Utilisateur non trouvé"});

            }

            const userToken = jwt.sign({
                id: user._id,
                userType: user.userType,
                email: user.email,
            }, process.env.JWT_SECRET, {expiresIn: "21d"});

            const {password, otp, ...others} = user._doc;

             res.status(200).json({...others, userToken});


        } catch (error) {
         res.status(500).json({status: false, message: error.message});   
        }
    },
}