const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require("./utils/path");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

console.log(rootDir);
app.use(bodyParser.urlencoded());
app.use(express.static(path.join (rootDir,"public" )));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req,res,next) => {
    console.log(rootDir);
    res.status(404).sendFile(path.join(rootDir, "views", "error.html"));
})

app.listen(3000);
