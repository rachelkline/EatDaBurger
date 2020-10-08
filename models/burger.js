var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    addBurger: function(cols, vals, cb) {
        orm.addBurger("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
    eatBurger: function(objColVals, condition, cb) {
        orm.eatBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;