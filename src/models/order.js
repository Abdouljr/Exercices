const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    foodId: {type: mongoose.Schema.Types.ObjectId, ref: 'Food'},
    quantity: {type: Number, default: 1},
    price: {type: Number, required: true},
    additives: {type: Array, default: []},
    instructions: {type: String, default: ""},
});

const orderSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    orderItems: [orderItemSchema],
    totalOrder: {type: Number, required: true},
    deleveryFee: {type: Number, required: true},
    grandTotal: {type: Number, required: true},
    deleveryAddress: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true
    },
    restaurantAddress: {type: String, required: true},
    payementMethod: {type: String, required: true},
    payementStatus: {type: String, default: 'Pending', enum: ["Pending", "Completed", "Failed"]},
    orderStatus: {type: String, default: 'Pending', enum: ["Placed", "Accepted", "Preparing", "Manuel", "Delivered", "Cancelled", "Ready", "Out of Delivery"]},
    restaurantId: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    restaurantCoords: [Number],
    recipientCoords: [Number],
    driverId: {type: String, default: ''},
    rating: {type: Number, min: 1, max: 5, default: 3},
    feedback: {type: String},
    promoCode: {type: String},
    discountAmount: {type: Number},
    notes: {type: String},
}, {timestamps: true});

module.exports = mongoose.model("Order", orderSchema)