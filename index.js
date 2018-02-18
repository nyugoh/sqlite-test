// import express from 'express';
// import php from 'php.js';
// // const php = require('./php.js');

// const app = express();
// const phpServer = php();

// phpServer.phpFolder = './'

// app.use('*.php', (request,response,next) =>{
// 	phpServer.parseFile(request.originalUrl,  (phpResult) =>{
// 		response.write(phpResult);
// 		response.end();
// 	});
// });

// app.listen(3000,  () =>{
// 	console.log('Node server listening on port 3000!')
// });

var express = require('express');
var app = express();

// var execPHP = require('./php.js')();
var exec = require("child_process").exec;

// execPHP.phpFolder = '.';

// app.use('*.php',function(request,response,next) {
// 	execPHP.parseFile(request.originalUrl,function(phpResult) {
// 		console.log(phpResult);
// 		response.write(phpResult);
// 		response.end();
// 	});
// });

app.get('/', function(req, res){
	exec("php index.php", function (error, stdout, stderr) {
		res.send(stdout);
	});
});

app.listen(3000, function () {
	console.log('Node server listening on port 3000!')
});
