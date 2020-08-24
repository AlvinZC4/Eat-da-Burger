const orm = require("../config/orm")

const burger = {
    selectAll: function(cb) {
        console.log("burger selectAll")
        orm.selectAll("burgers", function(res) {
            console.log("burger model", res)
            cb(res)
        })
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}

module.exports = burger