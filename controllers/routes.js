var express = require("express");
var router = express.Router();
var db = require('../models');
var path = require('path');

// Sets up initial splash page
router.route('/').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../splash.html'));
});

//Launches game
router.route('/:username').get(function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

//Get random prices
router.get("/game/priceupdate/:player", function (req, res) {


	db.Cities.findAll({
		where: {
			player_name: req.params.player
		}
	}).then((data) => {
		var returnData = getcityprices(data);

		res.json(returnData);

	})

});

router.get('/game/events', function (req, res) {
	db.Events.findAll().then((data) => {
		res.json(data);
	})

});

//Update player information
router.put('/player/update', function (req, res) {

	db.Player.update(
		req.body, {
			where: {
				username: req.body.username
			}
		}).then((data) => {

		res.json(data);
	});

});


//Find existing player data
router.get('/player/:username', function (req, res) {

	db.Player.findOne({
		where: {
			username: req.params.username
		}
	}).then((data) => {

		res.json(data);
	});

});

//Add new player to database
router.post('/player/:username', function (req, res) {

	Promise.all([
		db.Player.create({
		username: req.params.username
		}),

		//Creates a new list of cities for each individual player in the database
		citiescreate(req.params.username)
	]).then((data) => {

		res.json(data);
	});
});

//Update cities for event firing

router.put('/cities/event/:player', function (req, res) {

	console.log(req.body);
	var updateobject = {}

	updateobject[req.body.goodaffected + '_event'] = req.body.eventeffect;

	db.Cities.update(
		updateobject, {
			where: {
				regionid: req.body.regionaffected,
				player_name: req.params.player
			}
		}).then((data) => {
		res.json(data);
	});


});


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

			} else if (keyString === 'id') {
				cityObject.id = data[i].dataValues[keys[j]];
			} else {
				if (keyString.indexOf('_') > 0 && keyString.indexOf('low' > 0)) {

					//Find good and calculate price based on low and high range
					var good = keyString.substr(0, keyString.indexOf('_'));
					var lowrange = data[i].dataValues[keys[j]];
					var highrange = data[i].dataValues[keys[j + 1]];
					var currentPrice = parseInt((Math.random() * (highrange - lowrange)) + lowrange);
					var event = data[i].dataValues[keys[j + 2]];
					//check for event 
					if (event > 0) {
						currentPrice = parseInt(currentPrice * 10);
					} else if (event < 0) {
						currentPrice = parseInt(currentPrice / 10);
					}

					prices[good] = currentPrice;

					j += 2;

				}
			}

		};

		//Add prices to the cityObject and then push the object into return data array
		cityObject.prices = prices;
		returndata.push(cityObject);

	}

	return returndata;
}

function citiescreate(username) {
	
		const returnablePromise = Promise.all([
			db.Cities.create({
				city_name: 'Castle Black',
				regionid: 1,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 9,
				grain_high: 17,
				fish_low: 17,
				fish_high: 32,
				cloth_low: 28,
				cloth_high: 52,
				metal_low: 35,
				metal_high: 65,
				silk_low: 297,
				silk_high: 553,
				wood_low: 13,
				wood_high: 25,
				weapons_low: 201,
				weapons_high: 375,
				gems_low: 875,
				gems_high: 1625,
				medicine_low: 84,
				medicine_high: 156,
				poison_low: 420,
				poison_high: 780,
				dragonglass_low: 4025,
				dragonglass_high: 7475,
				wine_low: 45,
				wine_high: 85
			}),
			db.Cities.create({
				city_name: 'Winterfell',
				regionid: 1,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 8,
				grain_high: 12,
				fish_low: 27,
				fish_high: 39,
				cloth_low: 28,
				cloth_high: 45,
				metal_low: 30,
				metal_high: 40,
				silk_low: 144,
				silk_high: 656,
				wood_low: 12,
				wood_high: 24,
				weapons_low: 167,
				weapons_high: 373,
				gems_low: 851,
				gems_high: 1604,
				medicine_low: 49,
				medicine_high: 182,
				poison_low: 387,
				poison_high: 733,
				dragonglass_low: 7878,
				dragonglass_high: 8210,
				wine_low: 191,
				wine_high: 646
	
			}),
			db.Cities.create({
				city_name: 'The Twins',
				regionid: 1,
				player_name: username,
				xcoord: 450,
				ycoord: 500,
				grain_low: 9,
				grain_high: 14,
				fish_low: 10,
				fish_high: 29,
				cloth_low: 40,
				cloth_high: 48,
				metal_low: 49,
				metal_high: 58,
				silk_low: 206,
				silk_high: 545,
				wood_low: 10,
				wood_high: 25,
				weapons_low: 235,
				weapons_high: 316,
				gems_low: 608,
				gems_high: 1196,
				medicine_low: 99,
				medicine_high: 150,
				poison_low: 252,
				poison_high: 549,
				dragonglass_low: 3538,
				dragonglass_high: 8906,
				wine_low: 99,
				wine_high: 654
	
			}),
			db.Cities.create({
				city_name: 'The Crossroads',
				regionid: 2,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 14,
				grain_high: 18,
				fish_low: 14,
				fish_high: 33,
				cloth_low: 35,
				cloth_high: 51,
				metal_low: 29,
				metal_high: 51,
				silk_low: 297,
				silk_high: 553,
				wood_low: 13,
				wood_high: 25,
				weapons_low: 201,
				weapons_high: 375,
				gems_low: 875,
				gems_high: 1625,
				medicine_low: 84,
				medicine_high: 156,
				poison_low: 420,
				poison_high: 780,
				dragonglass_low: 4025,
				dragonglass_high: 7475,
				wine_low: 45,
				wine_high: 85
	
			}),
			db.Cities.create({
				city_name: 'The Eyrie',
				regionid: 2,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 7,
				grain_high: 13,
				fish_low: 13,
				fish_high: 25,
				cloth_low: 38,
				cloth_high: 58,
				metal_low: 40,
				metal_high: 51,
				silk_low: 316,
				silk_high: 670,
				wood_low: 19,
				wood_high: 25,
				weapons_low: 116,
				weapons_high: 335,
				gems_low: 764,
				gems_high: 1445,
				medicine_low: 67,
				medicine_high: 145,
				poison_low: 273,
				poison_high: 658,
				dragonglass_low: 3079,
				dragonglass_high: 4255,
				wine_low: 131,
				wine_high: 386
	
			}),
			db.Cities.create({
				city_name: 'Riverrun',
				regionid: 2,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 14,
				grain_high: 18,
				fish_low: 14,
				fish_high: 33,
				cloth_low: 35,
				cloth_high: 51,
				metal_low: 29,
				metal_high: 51,
				silk_low: 297,
				silk_high: 553,
				wood_low: 13,
				wood_high: 25,
				weapons_low: 201,
				weapons_high: 375,
				gems_low: 875,
				gems_high: 1625,
				medicine_low: 84,
				medicine_high: 156,
				poison_low: 420,
				poison_high: 780,
				dragonglass_low: 4025,
				dragonglass_high: 7475,
				wine_low: 45,
				wine_high: 85
	
			}),
			db.Cities.create({
				city_name: 'Pyke',
				regionid: 2,
				player_name: username,
				xcoord: 50,
				ycoord: 700,
				grain_low: 12,
				grain_high: 17,
				fish_low: 8,
				fish_high: 13,
				cloth_low: 39,
				cloth_high: 50,
				metal_low: 25,
				metal_high: 46,
				silk_low: 288,
				silk_high: 541,
				wood_low: 24,
				wood_high: 26,
				weapons_low: 101,
				weapons_high: 269,
				gems_low: 552,
				gems_high: 718,
				medicine_low: 56,
				medicine_high: 145,
				poison_low: 459,
				poison_high: 648,
				dragonglass_low: 4601,
				dragonglass_high: 6070,
				wine_low: 215,
				wine_high: 604
	
			}),
			db.Cities.create({
				city_name: 'King\'s Landing',
				regionid: 2,
				player_name: username,
				xcoord: 500,
				ycoord: 500,
				grain_low: 12,
				grain_high: 16,
				fish_low: 24,
				fish_high: 32,
				cloth_low: 32,
				cloth_high: 42,
				metal_low: 40,
				metal_high: 52,
				silk_low: 520,
				silk_high: 676,
				wood_low: 11,
				wood_high: 15,
				weapons_low: 213,
				weapons_high: 277,
				gems_low: 750,
				gems_high: 975,
				medicine_low: 80,
				medicine_high: 104,
				poison_low: 400,
				poison_high: 520,
				dragonglass_low: 2436,
				dragonglass_high: 3781,
				wine_low: 35,
				wine_high: 46
			}),
			
			db.Cities.create({
				city_name: 'Highgarden',
				regionid: 2,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 6,
				grain_high: 11,
				fish_low: 17,
				fish_high: 22,
				cloth_low: 38,
				cloth_high: 44,
				metal_low: 25,
				metal_high: 43,
				silk_low: 216,
				silk_high: 334,
				wood_low: 12,
				wood_high: 24,
				weapons_low: 297,
				weapons_high: 384,
				gems_low: 1072,
				gems_high: 1537,
				medicine_low: 64,
				medicine_high: 95,
				poison_low: 394,
				poison_high: 753,
				dragonglass_low: 2576,
				dragonglass_high: 5961,
				wine_low: 496,
				wine_high: 524
	
			}),
		   
			db.Cities.create({
				city_name: 'Casterly Rock',
				regionid: 2,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 9,
				grain_high: 17,
				fish_low: 17,
				fish_high: 32,
				cloth_low: 28,
				cloth_high: 52,
				metal_low: 35,
				metal_high: 65,
				silk_low: 297,
				silk_high: 553,
				wood_low: 13,
				wood_high: 25,
				weapons_low: 201,
				weapons_high: 375,
				gems_low: 875,
				gems_high: 1625,
				medicine_low: 84,
				medicine_high: 156,
				poison_low: 420,
				poison_high: 780,
				dragonglass_low: 4025,
				dragonglass_high: 7475,
				wine_low: 45,
				wine_high: 85
	
			}),
			db.Cities.create({
				city_name: 'Dragonstone',
				regionid: 3,
				player_name: username,
				xcoord: 100,
				ycoord: 500,
				grain_low: 9,
				grain_high: 17,
				fish_low: 17,
				fish_high: 32,
				cloth_low: 28,
				cloth_high: 52,
				metal_low: 35,
				metal_high: 65,
				silk_low: 297,
				silk_high: 553,
				wood_low: 13,
				wood_high: 25,
				weapons_low: 201,
				weapons_high: 375,
				gems_low: 875,
				gems_high: 1625,
				medicine_low: 84,
				medicine_high: 156,
				poison_low: 420,
				poison_high: 780,
				dragonglass_low: 4025,
				dragonglass_high: 7475,
				wine_low: 45,
				wine_high: 85
	
			})
	
	
		]);
	
		return returnablePromise;
	
}