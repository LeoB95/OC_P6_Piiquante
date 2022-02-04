/* IMPORT EXPRESS */ 
const express = require('express');
/* IMPORT ROUTER */ 
const router = express.Router();
/* IMPORT USER CONTROLLER */
const userCtrl = require('../controllers/user');
/* IMPORT USER ROUTES */ 
const userRoutes = require('./routes/user');

app.use('/api/sauce', sauceRoutes);
app.use('/api/auth', userRoutes);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;

