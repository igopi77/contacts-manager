const mongoose = require("mongoose");

const info = new mongoose.Schema({
    u_name:{
        type : String,
        required : [true,"Please Enter the name"]
    },
    password:{
        type : String,
        required : [true,"Please Enter the password"]
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("credentials",info);