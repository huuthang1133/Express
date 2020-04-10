var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(req,res){
	res.send('<h1>Hello Ajinomoto</h1>');
});

app.get('/users', function (req, res){
	res.send ('<p>User list</p>')
})

app.listen(port,function(){
	console.log('Server listening on port' + port);
});