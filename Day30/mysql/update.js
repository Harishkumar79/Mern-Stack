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

    //update data

    var user = "hk";
    var email = "hk@fjgk";
    var password = 1425;
    var q = `update users set username = "${user}" , email ="${email}" ,password = "${password}" where username = "nik"`;

    db.query(q, (err , data)=>{
        if(err) throw err;
        console.log("updated!!!")
    })
})

