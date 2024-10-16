var express = require("express");
var app= express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//middle were

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//connection with database
mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

app.get('/', (req,res) => {
    res.sendFile(__dirname +"/reg.html");
})

app.post('/reg', (req,res) => {
    var uname = req.body.uname;
    var uemail = req.body.uemail;
    var passw = req.body.passw;

    var data = {
        "username":uname,
        "email" : uemail,
        "password" : passw
    }

    db.collection("Express").insertOne(data , (err) =>{
    if(err) throw err;
    res.redirect('/');
    });
})



app.listen(5000 , (err) => {
    if(err) throw err;
    console.log("server start at http://localhost:5000");
})