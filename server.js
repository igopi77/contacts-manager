const express = require("express");
const errorHandling = require("./middleware/errorHandling");
const dbConnection = require("./config/dbConnection");

const dotenv = require("dotenv");

// Load environment variables from .env file with error handling
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    console.error("Error loading .env file:", dotenvResult.error);    
    process.exit(1);
}

const app = express();
dbConnection();
const port = process.env.PORT || 5000; // Use process.env.PORT with fallback to 5000
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandling);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
