const mongoose = require("mongoose");
 const UserSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    Password:{
        type:String,
        require:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
      }

 })
 const Userdata=mongoose.model("Userdata",UserSchema);
 module.exports=Userdata;
    