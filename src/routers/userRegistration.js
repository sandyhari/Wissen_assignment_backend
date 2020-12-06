const express = require("express")
const Cryptr = require('cryptr');
const UserModel = require("../models/usersModel");
//const {generateHash} =require("../hashservices/hashing");
const UserRouter = express.Router();

UserRouter.post("/",async (req,res)=>{
try{
    const {firstName,lastName,phoneNumber,address,SSN} = req.body;
    const cryptr = new Cryptr(process.env.secretkey);
    const hashedSSN = await cryptr.encrypt(SSN);
    console.log(`SSN value ${SSN} got hashed here to ${hashedSSN}`);

    const result = await new UserModel({
        firstName,
        lastName,
        phoneNumber,
        address,
        SSN:hashedSSN
    }).save();

    res.status(200).send(result);
}
catch(error){
    console.log(error);
    res.status(500).json({
        status:"ERROR",
        message:"INTERNAL SERVER ERROR"
    });
}
});

module.exports = UserRouter;