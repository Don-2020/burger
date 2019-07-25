var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//create all routes and set up logic
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})

router.get("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured],
        function (data) {
            res.json({ id: data.insertId })
        })
})

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condtion, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
});

//Delete route
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    })
});

//Export
module.exports = router;