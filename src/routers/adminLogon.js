const express = require("express");
const { generateHash,compareHash } = require("../hashservices/hashing");
const AdminModel = require("../models/adminModel");
const AdminRouter = express.Router();

AdminRouter.post("/",async (req,res)=>{
try{
    console.log("Incoming Login request")
    const {email,password} = req.body;
    const UserFound = await AdminModel.findOne({email});
    if(UserFound){
        const chckPwd = await compareHash(password,UserFound.passwordHashed);
        console.log("IS emptyy....."+chckPwd);
        if(chckPwd){
            console.log("password checking")
            res.status(200).json({
                status:"SUCCESS",
                UserFound
            })
        }
        else{
            res.status(400).json({
                status:"ERROR",
                message:"Invalid Credentials"
            })
        }
    }
    else{
        res.status(400).json({
            status:"ERROR",
            message:"Invalid Credentials"
        })
    }
}
catch(error){
    console.error(error);
    res.status(500).json({
        status:"ERROR",
        message:"INTERNAL SERVER ERROR"
    })
}
})
.post("/register",async (req,res)=>{
    console.log("came for registration");
    try{
        const {email,password} = req.body;
        const passwordHashed = await generateHash(password);
        console.log(`password got hashed as ${passwordHashed}`);
        const res = await new AdminModel({
            email,
            passwordHashed  
        }).save();

        res.status(201).json({
            status:"SUCCESS",
            message:"successfully Registered as new admin"
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            status:"ERROR",
            message:"INTERNAL SERVER ERROR"
        })
    }
});

module.exports = AdminRouter;