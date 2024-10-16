let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

db.collection('Node').deleteMany({"name": "cit"} , (err) => {
    if(err) throw err;
    console.log("data deleted!!!");
})