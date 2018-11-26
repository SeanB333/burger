// import orm
const orm = require("../config/orm.js");

// set burger specific functions
let burger = {
    all:(cb) => {
        orm.selectAll("burgers",(res)=> {
            cb(res);
        });
    },

    insert:(cols, cb) => {
        orm.insertOne("burgers", cols, vals,(res) => {
            cb(res);
        });
    },

    update:(vals, cols, cb) => {
        orm.updateOne("burgers", vals, cols,(res) => {
            cb(res);
        });
    }

};

module.exports = burger;