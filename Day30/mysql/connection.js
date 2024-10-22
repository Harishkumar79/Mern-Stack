var mysql = require("mysql");

// connection
var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"grras"
})

// connection on
db.connect((e)=>{
    if(e) throw e;
    console.log("connected!!!");
})