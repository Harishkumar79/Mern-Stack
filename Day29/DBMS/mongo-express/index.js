var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//middle were

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//connection with database
mongoose.connect("mongodb://localhost:27017/Grras");
var db = mongoose.connection;

//Sign up
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/reg.html");
})

app.post('/reg', async (req, res) => {
    var uname = req.body.uname;
    var uemail = req.body.uemail;
    var passw = req.body.passw;

    var data = {
        "username": uname,
        "email": uemail,
        "password": passw
    }

    var cl = db.collection("Express");

    var user = await cl.findOne({ email: uemail });

    if (!user) {
        cl.insertOne(data, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    }else{
        res.send("User with this email already exists!!");
    }
})

//login

app.post('/login', async (req, res) => {
    var uname = req.body.uname;
    var passw = req.body.passw;

    var cl = db.collection("Express");

    var user = await cl.findOne({ username: uname, password: passw });

    if (user) {
        res.sendFile(__dirname + '/home.html')
    } else {
        res.redirect('/');
    }

})


// update

app.get('/updt', (req,res) => {
    res.sendFile(__dirname +"/updt.html");
})

app.post('/updt', (req,res) => {
    var uname = req.body.uname;
    var uemail = req.body.uemail;

    var cl = db.collection("Express");

    cl.updateOne({username:uname},{$set:{email:uemail}},(err) =>{
    if(err) throw err;
    res.send('updated !!');
    });
})


// delete

app.get('/del', (req,res) => {
    res.sendFile(__dirname +"/delete.html");
})

app.post('/del', (req,res) => {
    var uname = req.body.uname;
    var passw = req.body.passw;

    var cl = db.collection("Express");

    cl.deleteOne({username:uname,password:passw},(err) =>{
    if(err) throw err;
    res.send('Deleted !!');
    });
})


app.listen(5000, (err) => {
    if (err) throw err;
    console.log("server start at http://localhost:5000");
})