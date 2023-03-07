const mongoose = require('mongoose');

const products = new mongoose.Schema({
    productID:{
        type:Number,
        required:true
    },
    title:{
     type:String,
     required:true
    },
    catageory:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const pro = mongoose.model('pro',products);
module.exports = pro;