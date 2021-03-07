const bcrypt = require("bcryptjs");
// Schema folder
const Register = require("../models/registers");

// Registration post
const RegistrationPostController =  async(req,res) =>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;

        if(password === cpassword){
            const registerMember = new Register({
                username: req.body.username,
                email: req.body.email,
                mobile: req.body.mobile,
                password: password,
                
            })
            
            const register = await registerMember.save();  
            console.log(register);
            res.status(201).send(register);
        }else{
            res.send("PASSWORD DOESN'T MATCH");
        }
        
    }
    catch(e){
        res.send(e);}
    
}
    //Registration Get
    const RegistrationGetController = async(req,res) =>{
        try{
            const reg = await Register.find({});
            res.status(201).send(reg);
        }
        catch(e){
            res.status(400).send(e);

        }

    } 

        //Login Post

    const LoginPostController = async(req,res) =>{
    try{
        const username = req.body.username;

        
        const password = req.body.password;

        const findUserName = await Register.findOne({username:username});
        

        const match =  await bcrypt.compare(password, findUserName.password);
        console.log(match);
        
        if(match){
            res.status(201).send("Login Successful");
        }else{
            res.send("password not matching")
        }
    }
    catch(error){
        res.status(400).send("invalid username");
    }
}
module.exports = {
    RegistrationGetController,
    RegistrationPostController,
    LoginPostController
}

