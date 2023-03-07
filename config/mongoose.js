const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;

db.once('open',function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Succesfully connected to DataBase");
})


module.exports = db;