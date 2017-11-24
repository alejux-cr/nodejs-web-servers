var express = require("express");
var cors = require("cors");
var app = express();

var neuroScienceTerms = [
	{
		term: "axon",
		defined:"the neuronal process that sends the signal or message away from the cell body toward target cells or neurons"
	},
	{
		term: "front cortex",
		defined: "any part of the frontal lobe"
	},
	{
		term: "homeostasis",
		defined: "self-regulating process by which a system remains stable by adjusting to changing conditions"
	}

];

app.use(function(req, res, next) {

	console.log(`${req.method} request for '${req.url}'`);
	next();

});

app.use(express.static("./public"));

app.use(cors()); /*any domain can make a request to our api*/

app.get("/dictionary-api",function(req, res){

	res.json(neuroScienceTerms);

});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;