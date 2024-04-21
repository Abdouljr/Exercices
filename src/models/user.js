const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, default: '0123456789'},
    password: {type: String, required: true},
    otp: {type: String, required: false, default: 'none'},
    verification: {type: Boolean, default: false},
    phoneVerification: {type: Boolean, default: false},
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: false
    },
    userType: {type: String, required: true, default: "Client", enum: ["Client", "Vendor", "Drvier", "Admin"]},
    profile: {type: String, default: 'https://b.fssta.com/uploads/application/soccer/headshots/713.png'}
}, {timestamps: true});

module.exports = mongoose.model('user', UserModel);