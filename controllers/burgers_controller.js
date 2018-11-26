// import files
const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/",function(req, res){
    burger.all(function(data){
        let hbsObject= {burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject)   
    });
});

// export router
module.exports = router;

