var express = require('express');
var app = express();
var server = require('http').Server(app);

app.get('/',function(req,res){
	res.status(200).send("Holi Mundo!");
});

app.get('/bkn',function(req,res){
	res.status(200).send("bknisimo");
});

server.listen(3000,function(){
	console.log("Servidor corriendo ...");
});