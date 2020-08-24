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
    insertOne: function(table, col, val, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) throw err
            console.log("ORM insertOne ", result)
            cb(result)
        })
    },
    updateOne: function() {

    }
}

module.exports = orm