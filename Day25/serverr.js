const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    if(req.url=="/"){
      fs.readFile("index.html", "utf-8", (err,data)=>{
        if(err) throw err;
        else res.end(data);
      })
    }
    else if (req.url=="/about"){
      fs.readFile("about.html", "utf-8", (err,data)=>{
        if(err) throw err;
        else res.end(data);
      })
    }
    else{
        res.write("<h1>404 page not found</h1>");
        res.end();
    }

}).listen(4010,(err)=>{
    if(err) throw err;
    else console.log("server start at http://localhost:4010/");
})