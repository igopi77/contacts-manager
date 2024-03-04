const mongoose = require("mongoose");

//mongoose.set('strictQuery', false);

const dbConnection = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/mycontacts').then(() => {
  console.log(`successfully connected`);
}).catch((e) => {
  console.log(`not connected`);
}); 
};

module.exports = dbConnection;
