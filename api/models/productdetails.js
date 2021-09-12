const mongoose = require('mongoose');

const ProductDetailsSchema = mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
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