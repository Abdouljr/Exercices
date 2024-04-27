const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategorieController = require('./src/controllers/categorie_controller');
const RestaurantController = require('./src/controllers/restaurant_controller');
const FoodController = require('./src/controllers/food_controller');
const RatingController = require('./src/controllers/rating_controller');
const AuthController = require('./src/controllers/auth_contoller');
const UserController = require('./src/controllers/user_controller');


const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Ir-yoobo Database connecté avec success"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', AuthController);
app.use('/api/users', UserController);
app.use('/api/categories', CategorieController);
app.use('/api/restaurants', RestaurantController);
app.use('/api/foods', FoodController);
app.use('/api/ratings', RatingController);
app.listen(process.env.PORT || 3000, () => console.log(`Le Backend ir-yoobo est lancer sur le port: ${process.env.PORT}`))