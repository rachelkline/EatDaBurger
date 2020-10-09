var express = require("express");
//Create router for app
var router = express.Router();
var orm = require("../config/orm");

var burger = require("../models/burger.js");

//ROUTES
//Post all the burgers in the database
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        let devoured = result.filter(b => b.devoured === 1);
        let undevoured = result.filter(b => b.devoured === 0);
        res.render("index", {
            devouredList: devoured,
            undevouredList: undevoured
        });
    });
});

//Add a burger
router.post("/api/burgers", function(req, res) {
    burger.addBurger([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId });
        // res.redirect("/");
    });
});

//Update a burger to be devoured
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.eatBurger({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Delete a burger
router.delete("/api/burgers/:id", (req, res) => {
    console.log("DELETE HIT!");

    const burgID = req.params.id;
    console.log(burgID);

    burger.deleteBurger(burgID, function() {
        console.log("Burger id " + burgID + " was removed.");

        res.status(200).end();
    })
})
// router.delete("/api/burgers/:id", function(req, res) {
//     const burgID = "id = " + req.params.id;
    
//     burger.deleteBurger(burgID, function(result){
//         res.status(200).end();
//     });
// });

module.exports = router;