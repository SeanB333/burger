// import orm
const orm = require("../config/orm.js");

// set burger specific functions
let burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insert: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (vals, cols, cb) {
        orm.updateOne("burgers", vals, cols, function (res) {
            cb(res);
        });
    }

};

module.exports = burger;