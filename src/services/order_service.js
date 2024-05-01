const Order = require("../models/order");


module.exports = {
    placeOrder: async (req, res) => {
        const newOrder = new Order({
            ...req.body,
            userId: req.user.id
        });

        try {
            await newOrder.save();

            const orderId = newOrder._id;
            res.status(201).json({status: true,  message: "commande effectue avec succes", orderId: orderId});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getUserOrders: async (req, res) => {
        const userId = req.user.id;
        const {payementStatus, orderStatus} = req.query;
        const query = {userId}

        if(payementStatus){
            query.payementStatus = payementStatus
        }

        if(orderStatus === orderStatus){
            query.orderStatus = orderStatus
        }
        try {
            const orders = await Order.find(query)
            .populate({
                path: 'orderItems.foodId',
                select: 'title imageUrl rating time',
            });

            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}