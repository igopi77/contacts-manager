const express = require("express");
const errorHandling = require("./middleware/errorHandling");

const dotenv = require("dotenv").config()

const app = express();

const port = process.env.port || 5000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandling);

app.listen(port,() =>{
    console.log(`Iam in the server ${port} `);
})