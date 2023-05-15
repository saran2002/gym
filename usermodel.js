const mongoose = require('mongoose');
const usermodel = new mongoose.Schema({
    
    mrg:String,
    aft:String,
    eve:String,
    nig:String,
});

exports.users = mongoose.model("workoutdetail",usermodel,"workoutdetail");