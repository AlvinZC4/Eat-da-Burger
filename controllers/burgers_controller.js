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

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function(result) {
        console.log({ id: result.insertId})
        res.json({ id: result.insertId })
    })
})

module.exports = router