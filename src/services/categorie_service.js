const Categorie = require('../models/categorie')

module.exports = {
    add: async (req, res)=>{
        const newCategorie = new Categorie(req.body);

        try {
            await newCategorie.save();
            res.status(201).json({status: true, message: 'Categorie créee avec success'});
            
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
            
        }
    },

    getAll: async (req, res)=>{
        try {
            const categories = await Categorie.find({title: {$ne: 'More'}}, {__v: 0});
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});

        }
    },

    random: async (req, res)=>{
        try {
            const categories = await Categorie.aggregate([
                {$match: {title: {$ne: 'More'}}},
                 {$sample: {size: 4}}]);
            
            const moreCategorie = await Categorie.findOne({title: 'More'}, {__v: 0});
            if(moreCategorie){
                categories.push(moreCategorie);
            }
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});

        }
    }
}