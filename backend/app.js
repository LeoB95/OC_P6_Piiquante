/*IMPORT EXPRESS */
const express = require('express');
  /* IMPORT BODY-PARSER */
const bodyParser = require('body-parser');
/* IMPORT ROUTEUR */
const saucefRoutes = require('./routes/sauce');
const path = require('path');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

 /* IMPORT MONGODB */ 

const mongoose = require('mongoose'); 
/* CONNEXION A MONGODB DATABASE */ 
mongoose.connect('mongodb+srv://leo_user_2021:9232092320OC@cluster0.va9ea.mongodb.net/PiquanteDataBase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  const app = express();   
/* ROUTE STUFF */ 
app.use('/api/sauce', sauceRoutes); 
 /* HEADER SCRIPT */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 
  /* EXPORT DONNEES */
module.exports = app;
