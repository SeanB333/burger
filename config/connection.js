// set .env path
require("dotenv").config();
const mysql = require("mysql");

// setup SQL connection
let connection = mysql.createConnection({
    host:"tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port:3306,
    user:"o9yuo9c1h94yf96v",
    password:"bfjjnjlqgema48oo",
    database:"p4ybf9zfyrnlqadr"
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
