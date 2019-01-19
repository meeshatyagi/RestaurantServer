const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose)
const Currency = mongoose.Types.Currency;

const deliveryBoySchema = new Schema({
     name: {
         type: String,
         required: true,
         unique: true
     }
})

var DeliveryBoys = mongoose.model('DeliveryBoy', deliveryBoySchema);

module.exports = DeliveryBoys;