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

    insertOne: function (burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        }, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (burgerID, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

// export orm
module.exports = orm;