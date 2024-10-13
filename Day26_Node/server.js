const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    if(req.url=="/"){
      fs.readFile("index.html", "utf-8", (err,data)=>{
        if(err) throw err;
        else res.end(data);
      })
    }
    else if (req.url == "/about"){
        res.write("<h1>Hello it is about page</h1>");
        res.end();
    }
    else if (req.url == "/contact"){
      res.write("<h1>This is contact us page</h1>");
      res.end();
    }
    else{
        res.write("<h1>404 page not found</h1>");
        res.end();
    }

}).listen(3000,(err)=>{
    if(err) throw err;
    else console.log("server start at http://localhost:3000/");
});