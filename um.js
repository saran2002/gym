const mongoose = require('mongoose');
const usermodel = new mongoose.Schema({
    
    name:String,
    pass:String,
   
});

exports.cust = mongoose.model("cust",usermodel,"cust");