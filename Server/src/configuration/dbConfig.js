const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/KathiravanArts");

mongoose.connection.on("connected",() => {
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error",(err) => {
    console.log(`Error in MongoDB connection : ${err}`);
});

module.exports = mongoose;

