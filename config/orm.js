const connection = require("./connection")


const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err
            console.log("ORM SelectAll ", result)
            cb(result)
        })
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}

module.exports = orm