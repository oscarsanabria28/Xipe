var express = require("express");
var app = express();

var Logger = require('./my_classes/utils/Logger.js');

app.get('/', (req,res)=>{
	Logger.error("Oscar");

	res.send("bye nigga");

});

var server= app.listen(9002, ()=>{
	console.log('New local server for Xipe e-commerce is ready at port 9002');
});