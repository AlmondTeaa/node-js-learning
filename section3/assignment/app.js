"use strict";
const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);
console.log("Server is Listening to Port:3000");
server.listen(3000);