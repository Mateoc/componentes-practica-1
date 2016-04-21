//Import express lib
var express = require('express');
var path = require('path');
//create new instance of express server
var app = express();

//Run the server with specific port
var server = app.listen(process.env.PORT || 9000, function () {
	var host = server.address().address;
	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});

//Set the maping for the static files
app.use(require('connect-livereload')());
app.use(express.static( path.join(__dirname, '/../app'))); //'./../app'));