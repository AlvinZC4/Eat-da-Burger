const orm = require("../config/orm")

const burger = {
    selectAll: function(cb) {
        console.log("burger selectAll")
        orm.selectAll("burgers", function(res) {
            console.log("selectAll model", res)
            cb(res)
        })
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            console.log("insertOne model ", res)
            cb(res)
        })
    },
    updateOne: function() {

    }
}

module.exports = burger