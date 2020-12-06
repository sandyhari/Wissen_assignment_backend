const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address:String,
    SSN:{
        type:String,
        required:true
    }
});

module.exports = model("User",UserSchema);