'use strict';

var properties = require('../package.json');
var distance = require('../service/distance');

// @CONTOLLER DEFINE A FUNCTION TO CALL BACK RESPONSE SENDING THE DATA BACK THROUGH 
// @SERVICES 
var controllers = {
	about: function(req, res) {
		var aboutInfo = {
			author:properties.author,
			name: properties.name,
			version: properties.version,
			description : properties.description
		}
		res.json(aboutInfo);
	},
	
	// GETDISTANCE FUNCTION FOR GETTING RESPONSE IN JASON FORMAT 

	getDistance: function(req,res){
		distance.find(req,res, function(err, dist) {
			if(err)
				res.send(err);
			res.json(dist);
		});
	},
};

module.exports = controllers;