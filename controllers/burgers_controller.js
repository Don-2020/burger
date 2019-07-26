var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//create all routes and set up logic
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data};
        console.log("error in controller")
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/')
    })
})

router.post("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function(){
        res.redirect('/')
    })
    // var condition = "id = " + req.params.id;

    // console.log("no error is here")
    // console.log("condition", condition);

    // burger.updateOne({
    //     devoured: req.body.devoured
    // }, condtion, function (result) {
    //     if (result.changedRows === 0) {
    //         console.log("No, no error over heere")
    //         return res.status(404).end()
    //     } else {
    //         res.status(200).end();
    //     }
    // });
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