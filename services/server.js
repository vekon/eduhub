var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: '3306',
	password: 'venukonda@01'
});
connection.connect();

app.use(cors());

app.get('/',function(req,res) {
	connection.query('select * from edu_hub.stream', function(err, rows, fields){
		console.log(rows);
		res.send(rows);
	});
});

app.listen(3200, function(){
	console.log('App running on 3200 port');
});