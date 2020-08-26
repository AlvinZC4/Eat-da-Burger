const express = require("express")
const router = express.Router()
const burger = require("../models/burger")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function(result) {
        res.json({ id: result.insertId })
    })
})

router.put("/api/burgers/:id", function(req, res) {
    const eaten = (req.body.devoured == "true")
    burger.updateOne("devoured", eaten, "id", req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end()
        }
        else {
            res.status(200).end()
        }
    })
})

module.exports = router