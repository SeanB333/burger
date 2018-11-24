const connection = require("./connection.js");

let orm = {
    selectAll: function(table,cb) {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString,[table], function(err, result){
            if (err){
                throw err;
            }
            cb(results);
        });
    },
    insertOne: function(table, cols, vals, cb){
        let queryString = "INSERT INTO ?? (??) VALUES ('??');";
        connection.query(queryString, [table, cols, vals],function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    


}

module.exports = orm;