var express = require("express");
var app = express();

//get

app.get("/",(req,res)=>{
    // res.send("hello");
    // res.json({
    //     name : "hk",
    //     city : "sirohi"
    // });
    res.sendFile('Express/index.html',(err)=>{
        res.send("error")
    })
}).listen(5048,(req , res)=>{
    console.log("server start at http://localhost:5048");
})

app.get('*',(req,res)=>{
    res.status(404).send("404 page not found");
})


//routing variable
// app.get(){}
// app.all('*')


