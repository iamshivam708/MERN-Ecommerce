const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        max:55,
        required: true
    },
    lastName:{
        type:String,
        max:55,
        required: true
    },
    email:{
        type:String,
        max:155,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    houseNo:{
        type:String
    },
    locality:{
        type: String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    hashedPassword:{
        type:String,
        max:155,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema)