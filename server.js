const express = require("express");

const dotenv = require("dotenv").config()

const app = express();

const port = process.env.port || 5000;

app.get('/api/contacts',(req,res) =>{
    res.status(201).json({
        message : "collect all the contatcs"
    });
})

app.listen(port,() =>{
    console.log(`Iam in the server ${port} `);
})