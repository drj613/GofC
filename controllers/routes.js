var express = require("express");
var router = express.Router();
var goods = require("../models/goods.js");

// Sets up initial home/index route
router.get("/", function(req, res){
	goods.all(function(goods_data){
		console.log(goods_data);
	});
});

router.put("/goods/update", function(req, res){
	goods.update(req.body.goods, function(res){
		console.log(res);
		res.redirect("/");
	});
});

module.exports = router;