// require connection from connection.js
const connection = require("./connection");

let orm = {
    selectAll: function (tableName, cb) {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (tableName, cols, vals) {
        let queryString = "INSERT INTO ?? (??) VALUES (??);";
        connection.query(queryString, [tableName, cols, vals] ,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (tableName, cols, vals) {
        let queryString = "UPDATE ?? SET ?? WHERE ??;";
        connection.query(queryString, [tableName, vals, cols], function(err,result){
            if (err) throw err;
            cb(result);
        });
    }
};

// export orm
module.exports = orm;