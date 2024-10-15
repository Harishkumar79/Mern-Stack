var express = require("express");
var app = express();

//get

app.get("/",(req,res)=>{
    res.send("hello , how are you?");
    // res.json({
    //     name : "hk",
    //     city : "sirohi"
    // });
    // res.sendFile(__dirname+ "/index.html",(err)=>{
    //     res.send("error")
    // })
})

//variable or parameters

app.get('/:username/:id' , (req,res)=>{
    let {username} = req.params;
    res.send(`welcome to page of ${username}`);
})


//query string
app.get("/search" , (req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("No search exist");
    }
    res.send(`your are searching for:- ${q}`);
})

app.listen(5048,()=>{
    console.log("server listening at http://localhost:5048");
})

// app.get('*',(req,res)=>{
//     res.status(404).send("404 page not found");
// })


//routing variable
// app.get(){}
// app.all('*')



