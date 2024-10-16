let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

var data = {
    "name" : "Grras",
    "age" : 10
}

db.collection('Node').insertOne(data , (err) => {
    if(err) throw err;
    console.log("data inserted!!!");
})