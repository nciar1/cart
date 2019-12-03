const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orders = new Schema({
    orders:string,
};

module.exports = mongoose.model('orders', orders);