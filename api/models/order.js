const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    productName:{
        type:String
    },
    productQty:{
        type:String
    },
    qty:{
        type:Number,
        default: 1
    },
    price:{
        type:Number
    },
    totalPrice:{
        type:Number
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    phone:{
        type:Number
    },
    status:{
        type:String
    }
})

module.exports = mongoose.model("Order",OrderSchema)