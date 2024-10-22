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

    //delete data

    var user = "nik";
    var q = `delete from users where username = "${user}"`;

    db.query(q, (err , data)=>{
        if(err) throw err;
        console.log("deleted!!!")
    })
})

