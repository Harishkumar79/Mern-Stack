let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

async function data(){
    let data = await db.collection('Node').findOne({"name":"Grras"});
    console.log(data);
}
data();

