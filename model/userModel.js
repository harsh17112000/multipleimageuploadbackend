const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    userprofile:{
        type:[],
        required:true
    }
},{timestamps:true});

// model
const userDB = new mongoose.model("users",userSchema);
module.exports = userDB;