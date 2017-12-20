var express = require("express");
var router = express.Router();
var db = require('../models');
var path = require('path');

// Sets up initial home/index route
router.route('/').get(function(req,res) {
	res.sendFile(path.join(__dirname, '../testindex.html'));
});

router.get("/priceupdate", function (req, res) {

	db.Cities.findAll().then((data) => {
		var returnData = getcityprices(data);

		res.json(returnData);

	})

});

router.put("/goods/update", function (req, res) {

	//Set up variables from data passed from client to simplify code
	var currentGood = req.body.good;
	var currentQuantity = parseInt(req.body.inventory);
	var currentGold = parseInt(req.body.gold);
	var buysell = req.body.transaction;
	var player = req.body.player;
	var transactionQuantity = parseInt(req.body.quantity);
	var price = parseInt(req.body.price);

	// Set up update variables based on whether transaction is buy or sell
	if (buysell === 'buy') {
		var updatedQuantity = currentQuantity + transactionQuantity;
		var updatedGold = currentGold - (transactionQuantity * price);

	} else {
		var updatedQuantity = currentQuantity - transactionQuantity;
		var updatedGold = currentGold + (transactionQuantity * price);
	}

	//Update database 	
	db.Player.update({
			[currentGood]: updatedQuantity,
			gold: updatedGold
		}, {
			where: {
				username: player
			}
		}).then(function (data) {
			res.json(data);
		})
		//Error handling
		.catch(function (err) {

			res.json(err);
		});


});

router.get('/player/:username', function (req,res) {

	db.Player.findOne({
		where: {
			username: req.params.username
		}
	}).then( (data) => {

		res.json(data);
	});

});

router.post('/player/:username', function (req,res) {

	db.Player.create({
		username: req.params.username
	}).then( (data) => {

		res.json(data);
	})
})

module.exports = router;

function getcityprices(data) {

	//Create empty array to place city data into
	var returndata = [];

	for (var i = 0; i < data.length; i++) {

		//Get array of object keys to allow for iterating between keys in the object
		var keys = Object.keys(data[i].dataValues);

		var cityObject = {};
		var prices = {};

		for (var j = 0; j < keys.length; j++) {

			//Set up variable to allow for string manipulation of key
			var keyString = keys[j];
			


			if (keyString === 'city_name') {
				cityObject.city = data[i].dataValues[keys[j]];

			} 
			else {
				if (keyString.indexOf('_') > 0 && keyString.indexOf('low' > 0)) {

					//Find good and calculate price based on low and high range
					var good = keyString.substr(0,keyString.indexOf('_'));

					

					var lowrange = data[i].dataValues[keys[j]];
					var highrange = data[i].dataValues[keys[j+1]];
					var currentPrice = parseInt((Math.random()*(highrange-lowrange)) + lowrange);

					//Debug code
					if (good === 'dragonglass') {
						console.log(lowrange);
						console.log(highrange);
					}
					prices[good] = currentPrice;

					j++;
										
				}
			}

		};

		//Add prices to the cityObject and then push the object into return data array
		cityObject.prices = prices;
		returndata.push(cityObject);

	}

	return returndata;
}