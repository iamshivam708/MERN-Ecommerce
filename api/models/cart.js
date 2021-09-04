const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    productId:{
        type:String,
        required: true
    },
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
    }
})

module.exports = mongoose.model("Cart",CartSchema)