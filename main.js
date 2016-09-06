var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

app.get('/',function(req,res){
	res.status(200).send("Holi Mundo!");
});

app.get('/bkn',function(req,res){
	res.status(200).send("bknisimo");
});

server.listen(port,function(){
	console.log("Servidor corriendo ...");
});