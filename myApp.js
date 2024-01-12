require('dotenv').config()
let express = require('express');
let app = express();




// console.log => terminal
console.log("Hello World")


// get requests
app.get("/", function (req, res) {
    // send files (ex: .html)
    res.sendFile(__dirname + "/views/index.html")
})

// app.use 
app.use("/public", express.static(__dirname + "/public"))

// .env testing
app.get("/json",function(req,res){
    let result;
    if(process.env.MESSAGE_STYLE==="uppercase"){
        result = "HELLO JSON"
    }
    else{
        result = "Hello json"
    }
    res.json({"message": result})
})






















module.exports = app;
