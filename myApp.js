require('dotenv').config()
let express = require('express');
let app = express();




// middleware
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  })


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


// chain middleware
app.get("/now",(req,res,next)=>{
req.time = new Date().toString();
next();
},(req,res)=>{
    res.send({time:req.time})
})

// get params object
app.get("/:word/echo",(req,res)=>{
    const word = req.params
    res.json({echo: word.word })
})


// query param input
app.get("/name",(req,res)=>{
    let first = req.query.first
    let last = req.query.last

    res.json({name: `${first} ${last}`})
})
















module.exports = app;
