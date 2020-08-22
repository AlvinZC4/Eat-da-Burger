const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: require("../../../../classwork/ur-rich-fsf-pt-05-2020-u-c/pws"),
    database: "burgers_db"
})

connection.connect(function(err) {
    if (err) throw err
    console.log("connected as id: " + connection.threadId)
})

module.exports = connection