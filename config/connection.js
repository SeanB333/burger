// set .env path
require("dotenv").config();
const mysql = require("mysql");

// setup SQL connection
let connection = mysql.createConnection({
    host: HOST,
    port: C_PORT,
    user: USER,
    password: PASS,
    database: DATA_B
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
