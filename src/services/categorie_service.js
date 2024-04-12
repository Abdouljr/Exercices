const Categorie = require('../models/categorie')

module.exports = {
    addCategorie: async (req, res)=>{
        const newCategorie = new Categorie(req.body);

        try {
            await newCategorie.save();
            res.status(201).json({status: true, message: 'Categorie créee avec success'});
            
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
            
        }
    },

    getAllCategorie: async (req, res)=>{
        try {
            const categories = await Categorie.find({title: {$ne: 'More'}}, {__v: 0});
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});

        }
    },

    getCategorieById: async (req, res)=>{
        const id = req.params.id
        try {
            const categorie = await Categorie.findById(id);
            res.status(200).json(categorie);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getrandomCategorie: async (req, res)=>{
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