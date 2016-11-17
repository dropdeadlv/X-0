/*
var http = require('http');

var static = require('node-static');

var file = new static.Server('.');

var server = http.createServer(function(req,res){
	file.serve(req,res)
});

server.listen('8080');
console.log('server is running!');
*/

var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.get("/send",function(req,res){
	res.sendFile(__dirname+'/newFile.json');
});

app.get("/form",function(req,res){
	res.sendFile(__dirname+'/form.html');
});

app.listen(8080);
console.log('server is running!')