var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Server Port : <strong>3000</strong><br>Server IP : <strong>" + req.connection.localAddress + "</strong>");
})

var server = app.listen(3000, () => {
    console.log("Server Started on Port 3000!");
})