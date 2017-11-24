var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(neuroScienceTerms);
});

app.post("/dictionary-api", function(req, res){

    neuroScienceTerms.push(req.body);
    res.json(neuroScienceTerms);

});

app.delete("/dictionary-api/:term",function(req, res){

    neuroScienceTerms= neuroScienceTerms.filter(function(definition){  /*predicate function, returns only true or false*/
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(neuroScienceTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;