const express = require('express');
const app = express();
const path = require('path');

app.get("/",(req,res)=>{
    const code = "<div><h1>WELCOME :</h1><button type='button'><a href='/ejs'>Next!</a></button></div>"
    res.send(code);
})

//EJS - (embedded javascript templetes)

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname , "/views"));
app.get("/ejs",(req,res)=>{
    res.render('index.ejs');
});
app.get("/ejs/dice_game",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1 
    // res.render('dice_game.ejs' , {num : diceValue});  1.method
    // res.render('dice_game.ejs' , {diceValue : diceValue});  2.method
    res.render('dice_game.ejs' , {diceValue});  // 3.method
});

const port = 5000;
app.listen(port ,()=>{
    console.log(`server listening at port ${port} : http://localhost:5000 `);
})