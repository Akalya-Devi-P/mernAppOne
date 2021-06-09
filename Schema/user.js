const mongose = require("mongoose");

const userSchema = new mongose.Schema({
    name:{type:String, default:""},
    email:{
        type:String
    },
    password:{type:String},
    mobiles:{type:Number}
})

const User = mongose.model("user",userSchema);

module.exports = User;