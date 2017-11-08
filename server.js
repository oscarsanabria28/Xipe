const express    = require('express');
const userModule = require('./Main');

var Logger = require('./my_classes/utils/Logger.js');
var app = express();


app.use('/Main',userModule);

app.get('/', (req,res)=>{
	Logger.debug("Oscar");

	res.send("bye nigga");

});

var server= app.listen(9002, ()=>{
	console.log('New local server for Bragi Tools is ready at port 9002');
});    