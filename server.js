
var hav = require('./haversinemodule');
//require the express nodejs module
var express = require('express'),
	//set an instance of express
	app = express(),
	//require the body-parser nodejs module
	bodyParser = require('body-parser'),
	//require the path nodejs module
	path = require("path");

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /form route is requested
app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');

	var distance = hav.HaversineCalc(req.body.lat1, req.body.long1, req.body.lat2, req.body.long2);

		res.send(JSON.stringify({

			distance: distance

		}));
	// output for the terminal
	console.log('Distance: ' + distance);
		});

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});
