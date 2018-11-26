// require connection from connection.js
const connection = require("./connection");

let orm = {
    selectAll:(tableName, cb) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableName],(err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne:(tableName, cols, vals) => {
        let queryString = "INSERT INTO ?? (??) VALUES (??);";
        connection.query(queryString, [tableName, cols, vals] ,(err,result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne:(tableName, cols, vals) => {
        let queryString = "UPDATE ?? SET devoured=?? WHERE id=??;";
        connection.query(queryString, [tableName, vals, cols],(err,result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

// export orm
module.exports = orm;