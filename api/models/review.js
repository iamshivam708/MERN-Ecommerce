const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    productId:{
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    userName:{
        type:String
    },
    review:{
        type:String,
        max:200
    },
    stars:{
        type: Number
    }
})

module.exports = mongoose.model("Review",ReviewSchema)