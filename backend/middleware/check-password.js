const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Le mot de passe doit faire 10 caractères minimum, avec une majuscule, une minuscule et au moins un symbole et un chiffre.' });
    } else {
        next();
    }
};