// Methods required to modify ORM while using goods_db

var orm = require("../config/orm.js");

var goods = {
	all:function(callback) {
		orm.all("goods", function(res){
			callback(res);
		})
	},

	update: function(id, callback){
		orm.update("goods", id, callback);
	}
}

module.exports = goods;
