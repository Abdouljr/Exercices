const Restaurant = require("../models/restaurant");

module.exports = {
    addRestaurant: async (req, res)=>{
        const {title, time, imageUrl, pickup, delivery, isAvailable, owner, code, logoUrl, coords} = req.body;
        if(!title || !time || !imageUrl || !owner || !code || !logoUrl || !coords.latitude || !coords.longitude || !coords.address || !coords.title){
            return res.status(400).json({status: false, message: "Veuillez renseigner tous les champs obligatoires"});
        }

        try {
            const newRestaurant = new Restaurant(req.body);
    
            await newRestaurant.save();
            res.status(201).json({status: true, message: 'Restaurant ajouté avec success'});
            
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getRestaurantById: async (req, res)=>{
        const id = req.params.id;
        try {
            const restaurant = await Restaurant.findById(id);
            res.status(200).json(restaurant);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },
    getAllRestaurant: async (req, res)=>{
        const code = req.params.code;
        try {
            let restaurants = [];
            if (code){
                restaurants = Restaurant.aggregate([
                    {$match: {code: code, isAvailable: true}},
                    {$project: {__v: 0}}
                ]);
            };

            if(restaurants.length === 0){
                restaurants = Restaurant.aggregate([
                    {$match: {isAvailable: true}},
                    {$project: {__v: 0}}
                ]);
            };

            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        };
        
    },

    getRamdomRestaurant: async (req, res)=>{
        const code = req.params.code;
        try {
            let restaurants = [];
            if (code){
                restaurants = Restaurant.aggregate([
                    {$match: {code: code, isAvailable: true}},
                    {$sample: {size: 5}},
                    {$project: {__v: 0}}
                ]);
            };

            if(restaurants.length === 0){
                restaurants = Restaurant.aggregate([
                    {$match: {isAvailable: true}},
                    {$sample: {size: 5}},
                    {$project: {__v: 0}}
                ]);
            };

            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

};