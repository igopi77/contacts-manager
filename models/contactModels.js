const mongoose = require("mongoose");

const contactSchema =new  mongoose.Schema({
    name :{
        type : String,
        required : [true,"Please Enter the name"]
    },
    email :{
        type : String,
        required : [true,"Please Enter the email"]
    },
    phone :{
        type : String,
        required : [true,"Please Enter the phone"]
    },
},
{
    timeStamp :true
}
);
module.exports = mongoose.model("contacts",contactSchema);