const connection = require("./connection.js");

let orm = {
    selectAll: function(table ,cb) {
        let queryString = "SELECT * FROM ?;";
        connection.query(queryString,[table], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, name, vals, cb){
        let queryString = "INSERT INTO ? (??) VALUES (?);";
        connection.query(queryString, [table, name, vals],function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, status, val, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        connection.query(queryString,[table, status, val, id], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }
};

module.exports = orm;