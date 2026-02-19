const express = require('express');

const path = require('path');
const dirRoot = require("../utils/path")
router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(dirRoot, "views", "shop.html"));
   });

module.exports = router;