var express = require("express");
var app = express();

var Logger = require('./my_classes/utils/Logger.js');

app.get('/', (req,res)=>{
	Logger.debug("Oscar");
	res.send("bye nigga nigga");
});

var server= app.listen(9002, ()=>{
	console.log('New local server for Bragi Tools is ready at port 9002');
});