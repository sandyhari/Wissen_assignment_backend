const mongoose = require("mongoose");

const URL = process.env.DB_URL||"mongodb+srv://hari:hari123@cluster0.4wpoe.mongodb.net/wissenassign?retryWrites=true&w=majority"
mongoose.connect(URL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("error",(error)=>{
    console.log("MongoDB connection Error..!")
    console.error(error)
})

db.once("open",function(){
    console.log("DB connection Successful..!")
});

module.exports = db;