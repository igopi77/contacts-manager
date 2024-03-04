const asyncHandler = require("express-async-handler");
const userCredentials = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc reigster the user
// @route post 
// @acces public || changed to private
const registerUser = asyncHandler(async(req,res) => {
    const {u_name,password} = req.body;
    const availableUser = await userCredentials.findOne({u_name});
    if(availableUser){
        return res.status(400).send("HE/SHE already registered");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const registeredUser = userCredentials.create({
        u_name,
        password:hashedPassword
    })
    if(registeredUser){
        res.status(202).json({
            message : "Registered successfully"
        })
    }
    else{
        res.status(500).send("User unable to insert");
    }
    res.status(202).json({
        message : "User registered successfully"
    });
});



// @desc login the user
// @route post 
// @acces public || changed to private

const loginUser = asyncHandler(async(req,res) => {
    const {u_name,password} = req.body;
    if(!u_name || !password){
        res.send("all feild are mandatory");
    }
    const checking = await userCredentials.findOne({u_name});
    if(checking && (await bcrypt.compare(password,checking.password))){
        const accessToken = jwt.sign({
           checking : {
            username : checking.u_name,
            id : checking.id
           } 
        },
        process.env.ACCESS_SECRET_CODE,
        {expiresIn : "15m"}
        );
        res.status(202).json({message : "Login successfully", token :accessToken });
    }
    else{
        res.status(404).json({message : "wrong credentials"});
    }
})

// @desc cuurent the user
// @route post 
// @acces public || changed to private

const currentUser = asyncHandler(async(req,res) => {
    res.status(200).json({
        message:"He is authorized and he is using"
    })
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}