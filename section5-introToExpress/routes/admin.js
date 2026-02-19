
const express = require('express');

const path = require('path');
const dirRoot = require("../utils/path")
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    console.log("Adding Product");
    res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(dirRoot, "views", "shop.html"));
});


module.exports = router;
