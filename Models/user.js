const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    profile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    verificationToken:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:{
        type:String
        
    }

})

module.exports = mongoose.model('user',userSchema);