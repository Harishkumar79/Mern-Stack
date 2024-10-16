let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

db.createCollection('Node');  // create collection in database
