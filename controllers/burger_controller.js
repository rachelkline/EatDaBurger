var express = require("express");

//Create router for app
var router = express.Router();
// var burger = require("../models/burger.js");

var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
}

//ROUTES

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
})
    


module.exports = router;