var express = require('express');
var http = require('http');

var app = express();

const content = require('./public/content.json')
app.get('/feed', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(content)
})
app.use(express.static('public', {
  redirect: true
}))

const port = process.env.PORT || 5000; 
console.log("Listening on port: " + port);
//create node.js http server and listen on port
http.createServer(app).listen(port);