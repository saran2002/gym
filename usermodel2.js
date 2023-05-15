const mongoose = require('mongoose');
const usermodel2 = new mongoose.Schema({
    
    fname:String,
    lname:String,
    email:String,
    gen:String,
    feed:String,

});

exports.users2 = mongoose.model("feedback",usermodel2,"feedback");