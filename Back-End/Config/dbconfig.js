require('dotenv').config();

const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

const dbconnect = () => {
    mongoose.connect(DB_URI).then(() => console.log("Mogodb connected Succusesfully")).catch((error) => console.log("db not connected ==>", error));

}

module.exports= {dbconnect};