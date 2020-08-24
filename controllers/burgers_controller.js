const express = require("express")
const router = express.Router()
const burger = require("../models/burger")

router.get("/", function(req, res) {
    console.log("controller GET")
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        }
        console.log("Handlebars Object ", hbsObject)
        res.render("index", hbsObject)
    })
})

module.exports = router