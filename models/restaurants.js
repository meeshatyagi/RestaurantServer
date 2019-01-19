const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose)
const Currency = mongoose.Types.Currency;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numberOfOrders:{
       type: Currency ,
       required: true
    },
    revenue:{
       type: Currency,
       required: true
    } 
})

var Restaurants = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurants;

