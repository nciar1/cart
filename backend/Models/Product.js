const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
   
  },
  size: {
    type:String,
    required: true
  },

  

  

 

}, {
    collection: 'products'
  })

module.exports = mongoose.model('product', productSchema)