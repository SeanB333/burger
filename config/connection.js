// set .env path
require("dotenv").config();
const mysql = require("mysql");

// setup SQL connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

//  make SQL connection
connection.connect(function(err){
    if (err) {
        console.error(`error connecting :${err.stack}`);
        return;
    }
    console.log(`connected as id: ${connection.threadId}`);
});

// export connection
module.exports = connection;
