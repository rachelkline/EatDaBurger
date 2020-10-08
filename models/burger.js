var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    addBurger: function() {

    },
    eatBurger: function(objColVals, condition, cb) {
        orm.eatBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;