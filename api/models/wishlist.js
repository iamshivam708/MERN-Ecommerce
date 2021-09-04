const mongoose = require('mongoose');

const WishlistSchema = mongoose.Schema({
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
    price:{
        type:Number
    }
})

module.exports = mongoose.model("Wishlist",WishlistSchema)