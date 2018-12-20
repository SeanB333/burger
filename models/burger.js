// import orm
const orm = require("../config/orm.js");

// set burger specific functions
let burger = {
    all:(cb) => {
        orm.selectAll("burgers",(res)=> {
            cb(res);
        });
    },

    insertOne: function (burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res);
        });
    },

    updateOne: function (burger_id, cb) {
        orm.updateOne(burger_id, function (res) {
            cb(res);
        });
    },
    

};

module.exports = burger;