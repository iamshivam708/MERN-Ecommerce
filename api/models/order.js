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
    status:{
        type:String
    }
})

module.exports = mongoose.model("Order",OrderSchema)