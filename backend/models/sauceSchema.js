  /* IMPORT MONGOOSE */   
const mongoose = require('mongoose');
  /* IMPORT SCHEMA THING  */     
const sauceSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});
  /* EXPORT THING SCHEMA */      
module.exports = mongoose.model('Sauce', sauceSchema);