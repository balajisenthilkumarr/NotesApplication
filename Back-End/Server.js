const express = require("express");
const app = express();
const cors=require("cors");
const Router=require("./Routers/task");
const { dbconnect } = require("./Config/dbconfig");
require('dotenv').config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

dbconnect()
 app.use("/data/",Router);

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
  });
  