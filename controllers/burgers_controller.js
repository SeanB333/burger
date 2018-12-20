// import files
const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();
// get route
router.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});
// post route for a new burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/');
    });
});
// post rout for an update
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/');
    });
});
// export router
module.exports = router;

