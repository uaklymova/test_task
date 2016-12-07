var express = require('express');
var http    = require('http');
var server;
var app;

console.log('====== Connected ====');

app     = express();
server  = http.createServer(app);

app.use(express.static(__dirname, + 'public'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html')
});
server.listen(3030, function () {
    console.log('====== Port 3030 ======');
    console.log('====== Server started ======');
});

