const { query } = require('express');
const FoodModel = require('../models/food');

module.exports = {
    addFood: async (req, res)=>{
        const {title, foodTags, category, code, time, restaurant, description, price, additives, imageUrl} = req.body;
        if(!title || !foodTags || !category || !code || !time || !restaurant || !description || !price || !additives || !imageUrl){
            res.status(400).json({status: false, message: "Veuillez renseigner tous les champs obligatoires"});
        }

        try {

            const newFood = new FoodModel(req.body);
            await newFood.save()
            res.status(201).json({status: true, message: 'Nourriture ajouté avec success'});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },


    getFoodById: async (req, res)=>{
        const id = req.params.id;
        try {
            const food = await FoodModel.findById(id);
            res.status(200).json(food);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getRandomFood: async (req, res)=>{
        try {
            let randomFoodList = [];            
            if(req.params.code){

                randomFoodList = await FoodModel.aggregate([
                    {$match: {code: req.params.code, isAvailable: true}},
                    {$sample: {size: 3}},
                    {$project: {__v: 0}}
                ]);
            }

            if( !randomFoodList.length){
                randomFoodList = await FoodModel.aggregate([
                    {$sample: {size: 5}},
                    {$project: {__v: 0}}
                ]);
            };

            if( randomFoodList.length){
                res.status(200).json(randomFoodList);
            }else{
                res.status(404).json({status: false, message: "Aucune nourriture disponible"});
            };
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getFoodsByRestaurant: async (req, res)=>{
        const id = req.params.id;
        try {
            const foods = await FoodModel.find({restaurant: id});
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },


    // Menu
    getFoodsByCategoryAndCode: async (req, res)=>{
        const {category, code} = req.params;
        try {
            const foods = await FoodModel.aggregate([
                {$match: {category: category, code: code, isAvailable: true}},
                {$project: {__v: 0}}
            ]);

            if(foods.length === 0){
               return res.status(200).json([]);
            };

            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    // Recherche
    searchFoods: async (req, res)=>{
        const search = req.params.search;
        try {
            const foods = await FoodModel.aggregate([
                {
                    $search: {
                        index: 'foods',
                        text: {
                            query: search,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                },
                {$project: {__v: 0}}
            ]);

            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getRandomFoodsByCategoryAndCode: async (req, res)=>{
        const {category, code} = req.params;
        let foods;
        try {
            foods = await FoodModel.aggregate([
                {$match: {category: category, code: code, isAvailable: true}},
                {$sample: {size: 10}},
                {$project: {__v: 0}}
            ]);

            if(!foods || foods.length === 0){
                foods = await FoodModel.aggregate([
                    {$match: {code: code, isAvailable: true}},
                    {$sample: {size: 10}},
                    {$project: {__v: 0}}
                ]);
            }else if(!foods || foods.length === 0){
                foods = await FoodModel.aggregate([
                    {$match: {isAvailable: true}},
                    {$sample: {size: 10}},
                    {$project: {__v: 0}}
                ]);
            };

            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}