const express = require("express");
const UserModel = require("../models/usersModel");
const HomeRouter = express.Router();

HomeRouter.get("/", async (req,res)=>{
    try{
        const allUsers = await UserModel.find({});
        res.status(200).json({allUsers});
    }
    catch(error){
        console.error();
        res.status(500).send("INTERNAL SERVER ERROR")
    }
});

module.exports = HomeRouter;