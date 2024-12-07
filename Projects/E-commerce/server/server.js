const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://harishsen:hksen7976@cluster1.0lhag.mongodb.net/')
.then(()=>console.log("mongoBB connected"))
.catch((error)=>console.log(error));

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
    cors({
        origin : "http://localhost:5173/",
        methods : [ "GET" , "POST" , "DELETE" , "PUT"],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "pragma"
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT , ()=> console.log(`server is now running on port ${PORT}`));