const express = require("express");
const route = express.Router();

route.post("/register", (req,res) => {
    res.status(200).json({
        message:"register your credentials"
    })
});

route.post("/login",(req,res) =>{
    res.json({
        message:"login now"
    })
});

module.exports = route;