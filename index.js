"use strict";
var express = require('express');
var app = express();
var path = require('path');

var pub = path.join(__dirname, '/pub');
app.use(express.static(pub));

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("App listening on 3000");
});
