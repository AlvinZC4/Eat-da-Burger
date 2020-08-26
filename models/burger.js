const orm = require("../config/orm")

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res)
        })
    },
    updateOne: function(col1, val1, col2, val2, cb) {
        orm.updateOne("burgers", col1, val1, col2, val2, function(res) {
            console.log("updateOne model ", res)
            cb(res)
        })
    }
}

module.exports = burger