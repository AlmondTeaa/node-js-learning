const http = require("http");

const express = require("express");

const app = express();

app.use("/epal",(req, res, next) => {
    console.log("Epal1");
    next();
    
});

app.use("/users", (req, res, next) => {
    console.log("You are at the default endpoint");
    res.send('<h1>Hello World</h1>');
});


app.use("/",(req, res, next) => {
    console.log("You are at the default endpoint");
    res.send('<h1>Welcome Users</h1>');
    
});

console.log('Server Listening to Port 3000')
app.listen(3000)
