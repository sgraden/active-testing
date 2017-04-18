"use strict";
let express = require('express');
let app = express();
let path = require('path');

var public = path.join(__dirname, '/pub');
app.use(express.static(public));

app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("App listening on 3000");
})
