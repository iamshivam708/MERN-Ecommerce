const mongoose = require('mongoose');

const ProductDetailsSchema = mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    keyFeatures:{
        type:String
    },
    seller:{
        type:String
    },
    description:{
        type:String
    },
    manufacturingDetails:{
        type:String
    },
})

module.exports = mongoose.model("ProductDetails",ProductDetailsSchema)