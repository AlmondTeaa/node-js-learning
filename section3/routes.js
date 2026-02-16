const fs = require("fs");
const path = require("path")

const routeHandler = (req, res) => {
    if(req.url === "/"){
        console.log("Endpoint : /");
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if(err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("Internal Server Error");
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
            console.log("Endpoint : / Submitted Data Succesfully");
        })
    }
    if(req.url === "/message"){
        console.log("Endpoint /message")
        const body = [];
        let parseBody;
        req.on("data", (chunk)=> {
            body.push(chunk);
            console.log(`Chunk: ${chunk}`);
        });
        req.on("end", () => {
            parseBody = Buffer.concat(body).toString();
            console.log(`Parsed body: ${parseBody}`);
        })
        fs.writeFileSync("mesage.txt", "dummy")
        fs.readFile(path.join(__dirname, "landingpage.html"), (err, data) => {
            if(err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("Internal Server Error");
            }
            res.writeHead(302, 
                {"Location": "/message"},
                {"Content-Type": "text/html"}
            );
            res.end(data);
        })
    }
}
module.exports = routeHandler;