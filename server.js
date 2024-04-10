const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require('./routes/category_route');

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Ir-yoobo Database connected successfully"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/category', CategoryRoute);
app.listen(process.env.PORT || 3000, () => console.log(`Le Backend ir-yoobo est lancer sur le port: ${process.env.PORT}`))