var express = require("express");
var router = express.Router();

// Sets up initial home/index route
router.get("/", function(req, res){
	
});

router.put("/goods/update", function(req, res){

	//Set up variables from data passed from client to simplify code
	var currentGood = req.body.good;
	var currentQuantity = req.body.inventory;
	var currentGold = req.body.gold;	
	var buysell = req.body.transaction;
	var player = req.body.player;
	var transactionQuantity = req.body.quantity;
	var price = req.body.price;

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
	  }).then(function(data) {
		res.json(data);
	  })
	  //Error handling
	  .catch(function(err) {

		res.json(err);
	  });
	
	
});

module.exports = router;