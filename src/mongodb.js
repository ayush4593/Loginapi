const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/LoginSignup")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })

const LogINSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
       },
    password: {
        type:String,
        required:true
   }
})

const colletction=new mongoose.model("LoginCollection",LogINSchema)

module.exports=colletction