const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded());
app.use(userRoutes);
app.use(mainRoutes);

console.log("Server listening to port 3000");
app.listen(3000);
