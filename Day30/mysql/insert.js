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

    //insert data

    var user = "nik";
    var email = "nik@nnfg";
    var password = 123123;

    // var q = 'insert into users(username,email,password) values ("harish", "hk@gmmf",123123)';
    var q = `insert into users(username,email,password) values ("${user}", "${email}","${password}")`;

    db.query(q, (err)=>{
        if(err) throw err;
        console.log("inserted !!!")
    })
})

