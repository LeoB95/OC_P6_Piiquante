/* IMPORT EXPRESS */ 
const express = require('express');
/* IMPORT ROUTER */ 
const router = express.Router();
/* IMPORT USER CONTROLLER */
const userCtrl = require('../controllers/user');
/* IMPORT USER ROUTES */  
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;

