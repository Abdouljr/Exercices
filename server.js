const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategorieController = require('./src/controllers/categorie_controller');
const RestaurantController = require('./src/controllers/restaurantController');

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Ir-yoobo Database connecté avec success"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/category', CategorieController);
app.use('/api/restaurant', RestaurantController);
app.listen(process.env.PORT || 3000, () => console.log(`Le Backend ir-yoobo est lancer sur le port: ${process.env.PORT}`))