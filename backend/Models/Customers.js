const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customeroSchema = new Schema({
customerInfo:
{
email:{
    type: String,
    required: true
},

firstName:{
type: String,
required: true
},

lastName:{
    type: String,
    required: true
    },
    
},

ShippingInfo:
{
    streetAdd1:{
        type: String,
        required: true
        },
        
        streetAdd2:{
            type: String,
            required: true
            },

         city:{
            type: String,
            required: true
             },

        state:{
             type: String,
            required: true
            },

        zipCode:{
                type: Number,
               required: true
               }
                    
}

});

module.exports = CustomerInfoSchema = mongoose.model('customer', customerSchema);