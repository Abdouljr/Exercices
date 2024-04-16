const Rating = require("../models/rating");
const Food = require("../models/food");
const Restaurant = require("../models/restaurant");

module.exports = {

    addRating: async (req, res) => {
        const newRating = new Rating(
            {userId: req.body.userId,
            ratingType: req.body.ratingType,
             product: req.body.product, 
             rating: req.body.rating
            });

        try {
            await newRating.save();
            if(req.body.ratingType == "Restaurant"){
                const restaurants = await Rating.aggregate([
                    {$match: {ratingType: req.body.ratingType, product: req.body.product}},
                    {$group: {_id: '$product', averatedRating: {$avg: '$rating'}}}
                ]);
                if(restaurants.length > 0){
                    console.log("restaurants:", restaurants)
                const averatedRating = restaurants[0].averatedRating;
                await Restaurant.findOneAndUpdate(req.body.product, {rating: averatedRating}, {new: true});
                };
            }else if(req.body.ratingType == "Food"){
                const foods = await Rating.aggregate([
                    {$match: {ratingType: req.body.ratingType, product: req.body.product}},
                    {$group: {_id: '$product', averatedRating: {$avg: '$rating'}}}
                ]);
                if(foods.length > 0){
                    console.log("restaurants:", foods)
                const averatedRating = foods[0].averatedRating;
                await Food.findOneAndUpdate(req.body.product, {rating: averatedRating}, {new: true});
                };
            };
            res.status(201).json({status: true, message: 'Notes mise à jour avec success'});

        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    checkUserRating: async (req, res) => {
        const ratingType = req.query.ratingType;
        const product = req.query.product;

        try {
            const existingRating = await Rating.findOne({userId: req.user.id, ratingType: ratingType, product: product});
            if (existingRating) {
                res.status(200).json({status: true, message: 'Vous avez noté ce restaurant'});
            }else{
                res.status(200).json({status: false, message: "vous n'avez pas noté ce restaurant"});
            }
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}