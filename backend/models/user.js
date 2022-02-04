/* IMPORT MONGOOSE */    
const mongoose = require('mongoose');
/* IMPORT UNIQUE VALIDATOR */   
const uniqueValidator = require('mongoose-unique-validator');
/* SCHEMA EMAIL PASSWORD */     
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
/* LIAISON SCHEMA ET PLUGIN UNIQUEVALIDATOR */      
userSchema.plugin(uniqueValidator);
/* EXPORT SCHEMA USER MODEL */    
module.exports = mongoose.model('User', userSchema);