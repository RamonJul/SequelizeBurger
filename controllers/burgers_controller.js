var express = require("express")
var router = express.Router();
var db = require("../models")

router.get("/", function (req, res) {
    db.burger.findAll({}).then(data => {
        var burger_obj = {
            burger: data
        }
        res.render("index.handlebars", burger_obj)
    })
});

router.post("/api/burger/:burger_name", function (req, res) {
    db.burger.create({
        burger_name: req.params.burger_name
    }).then(function (result) {
        res.json(result)
    })

})

router.put("/api/burger/:id", function (req, res) {
    db.burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result)
    })


})
router.delete("/api/burger/:id", function (req, res) {
    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result)
    })
})

//post and put needs to refresh the page to do anything afterwards
module.exports = router;