// import files
const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();
// get route
router.get("/",(req, res)=>{
    burger.all((data)=>{
        let hbsObject= {burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject)   
    });
});
// post route for a new burger
router.post("/api/newBun",(req,res) => {
    burger.insert(req.body.burger_name, false,(data) => {
        res.redirect("/");
    });
});
// post rout for an update
router.post("/api/updateBun/:id",(req, res) => {
    burger.update(true, req.params.id, (data) => {
        res.json(data)
    })
})
// export router
module.exports = router;

