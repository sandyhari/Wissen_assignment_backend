require("./src/dbConfig/configuration.js")
const dotenv = require("dotenv")
dotenv.config();
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const AdminLoginrouter = require("./src/routers/adminLogon");
const UserRegisterrouter = require("./src/routers/userRegistration");
const Homepagerouter = require("./src/routers/homepageRouter");
const PORTVAL = process.env.PORT||8632;

app.use(cors());
app.use(bodyParser.json()); // request body is handled and coverted to json format


app.use("/api/adminLogon",AdminLoginrouter);
app.use("/api/userRegister",UserRegisterrouter);
app.use("/api/home",Homepagerouter);
// app.use("");


app.listen(PORTVAL,()=>{
    console.log(`Node Server connected and running with port:${PORTVAL}`);
})