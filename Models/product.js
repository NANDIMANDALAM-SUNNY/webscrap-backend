const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image:{
        type:String,
        unique:true, 
        required:true,       
       
    },
    title:{
        type:String,
        required:true, 
    },

    price:{
        type:String,
        required:true, 
       
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('products',productSchema);