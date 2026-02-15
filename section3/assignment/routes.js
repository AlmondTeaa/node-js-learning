const fs = require("fs");
const path = require("path");

const routeHandler = (req, res) => {
    if (req.url === "/" && req.method === "GET"){
        console.log(__dirname);
        fs.readFile(path.join(__dirname, "index.html"), (err,data) => {
            if(err){
                res.writeHead(500, 
                    {"Content-Type": "text/plain"}
                );
                return res.end("Internal Server Error");
            }
            res.writeHead(301, 
                {"Location":"/users"},
                {"Content-Type": "text/html"}
            );
            return res.end(data);
        })
    }
    if(req.url === "/users" && req.method === "POST"){
        console.log("Entering /users");
        const body = [];
        req.on("data",(chunk) => {
            body.push(chunk);
        })
        req.on('end',() => {
            console.log(`Welcome ${body.toString().split("=")[1]}`);
        });

        fs.readFile(path.join(__dirname,"users.html"),(err, data) => {
            if(err) {
                res.writeHead(500, 
                    {"Content-Type" : "text/plain"}
                )
                return res.end("Interl Server Error")
            }
            res.writeHead(200, 
                {"Content-Type" : "text/html"}
            )
            return res.end(data);
        })
    }
}

module.exports = routeHandler;