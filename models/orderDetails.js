const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose)
const Currency = mongoose.Types.Currency;

const orderDetailsSchema = new Schema({
    deliveryBoyName: {
        type: String,
        required: true
    },
    distance:{
       type: Number ,
       required: true,
       min : 1
    },
    ratingRestaurant:{
       type: Number,
       required: true,
       min: 1,
       max: 5
    },
    restaurantName: {
        type: String,
        required: true,
    },
    ratingDeliveryBoy:{
       type: Number,
       required: true,
       min: 1,
       max: 5
    },
    price: {
        type: Number,
        required: true,
        min : 1
    }
})

var orderDetails = mongoose.model('orderDetail', orderDetailsSchema);

module.exports = orderDetails;

