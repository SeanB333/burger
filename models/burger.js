const orm = require("../config/orm.js");

let burgers = {
    all: function(cb) {
      orm.selectAll("burgers", function(data) {
        cb(data);
      });
    },
    
    create: function(cols, vals, cb) {
      orm.insertOne("burgers",burger_name, val, function(data) {
        cb(data);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(data) {
        cb(data);
      });
    }
  };
  
 
  module.exports = burgers;