const mongoose = require('mongoose');

const RatingModel = new mongoose.Schema({
    userId: {type: String, required: true},
    ratingType: {type: String, required: true, enum: ["Restaurant", "Driver", "Food"]},
    product: {type: String, required: true},
    ratiing: {type: Number, min: 1, max: 5},
});

module.exports = mongoose.model('Rating', RatingModel);