const connection = require("./connection")


const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: function(table, col, val, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: function(table, col1, val1, col2, val2, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, result) {
            if (err) throw err
            console.log("ORM updateOne ", result)
            cb(result)
        })
    }
}

module.exports = orm