const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        max:100
    },
    mrp:{
        type: Number,
        required: true
    },
    sellingPrice:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    productDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductDetails',
        required:true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    adminId:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    images:{
        type: Array,
        required: true
    },
    discount:{
        type:Number,
        required: true
    },
    isFeatured:{
        type:Boolean,
        required:true,
    }
})


module.exports = mongoose.model("Product", ProductSchema)