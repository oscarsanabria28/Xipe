var Logger = new Object();

var colorError = "color:red";

Logger.error = function(msg){
	console.log("ERROR: "+msg,colorError);
};

Logger.info = function(msg){
	console.log("INFO: "+msg);
};

Logger.debug = function(msg){
	console.log("DEBUG: "+msg);
};

Logger.warn = function(msg){
	console.log("WARN: "+msg);
};

module.exports = Logger;