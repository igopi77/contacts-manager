const express = require("express");
const errorHandling = require("./middleware/errorHandling");
const dbConnection = require("./config/dbConnection");

const dotenv = require("dotenv");


const dotenvResult = dotenv.config();

const app = express();
dbConnection();
const port = process.env.PORT || 5000; 
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandling);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
