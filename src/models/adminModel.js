const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const AdminSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    passwordHashed:{
        type:String,
        required:true
    },
    createdDT:{
        type:Date,
        default:Date.now()
    }
});

module.exports = model("Admin",AdminSchema);