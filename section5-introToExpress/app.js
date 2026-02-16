const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Server was accesssed");
    next();
});

app.use((req, res, next) => {
    console.log("Hello Again");
})

server = http.createServer(app);
server.listen(3000);