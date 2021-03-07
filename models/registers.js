const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const RegistrationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
    
})

RegistrationSchema.pre("save", async function(next){
    
    console.log(`Current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    
    next();
})


const Register = new mongoose.model("Register", RegistrationSchema);

module.exports = Register;