var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//create all routes and set up logic
router.get("/", function (req, res) {
    burger.read(function (data) {
        var hbsObject = { burgers: data };
        // console.log("error in controller")
        console.log("GET");
        res.render("index", hbsObject);
    });
})

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
            console.log(req.body.burger_name)
            res.redirect("/")
        })
})

router.put("/api/burgers/:id", function (req, res) {

    console.log("hi");
    res.send(req.params.id)
    // burger.update(req.params.id, function (res) {
    //    console.log(res)
    // })


    // var condition = 'id = '+ req.params.id;
    // burger.update({
    //     devoured: true
    // } , function(data){
    //     res.redirect("/");
    // })
});

//Export
module.exports = router;