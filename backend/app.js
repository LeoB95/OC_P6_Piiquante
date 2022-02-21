//IMPORT DES DEPENDANCES
const express = require("express");
const app = express(); 
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const helmet = require('helmet'); 
const path = require("path"); 

//IMPORT ROUTES
const userRoutes = require('./routes/user')
const sauceRoutes = require('./routes/sauce'); 

/* CONNEXION A MONGODB DATABASE */ 
mongoose.connect('mongodb+srv://leo2022:leoProject6@cluster0.cphjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  
  userSchema.plugin(uniqueValidator); 

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images'))) 
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes)
 
module.exports = app;