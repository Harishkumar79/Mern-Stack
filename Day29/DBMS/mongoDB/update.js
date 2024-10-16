let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

db.collection('Node').updateOne({"name":"Grras"},{$set:{"age":20}}, (err) => {
    if(err) throw err;
    console.log("data updated!!!");
})