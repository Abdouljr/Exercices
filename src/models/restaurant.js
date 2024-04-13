const mongoose = require('mongoose');

const RestaurantModel = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    imageUrl: {type: Array, required: true},
    foods: {type: [], default: []},
    pickup: {type: Boolean, default: true},
    delivery: {type: Boolean, default: true},
    isAvailable: {type: Boolean, default: true},
    owner: {type: String, required: true},
    code: {type: String, required: true},
    logoUrl: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 3},
    ratingCount: {type: String, default: "227"},
    verification: {type: String,  default: "Pending", enum: ["Pending", "Verified", "Rejected"]},
    verificationMessage: {type: String,  default: "Votre application est en cours d'examen. Nous vous informerons une fois qu'il sera vérifié."},
    coords: {
        id: {type: String, required: true},
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true},
        latitudeDelta: {type: Number, default: 0.0122},
        longitudeDelta: {type: Number, default: 0.0122},
        address: {type: String, required: true},
        title: {type: String, required: true},
        },
});

module.exports = mongoose.model('Restaurant', RestaurantModel);