const jwt = require('jsonwebtoken');
 

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Les identifiants sont invalides';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
module.exports = (req, res, next) => {
  const validEmail = (email) => {
      let emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      let isRegexTrue = emailRegexp.test(email)
      isRegexTrue ? next() : res.status(400).json({ message: 'adresse mail non valide' });
  }
  validEmail(req.body.email)
};
const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Le mot de passe doit faire 10 caractères minimum, avec une majuscule, une minuscule et au moins un symbole et un chiffre.' });
    } else {
        next();
    }
};