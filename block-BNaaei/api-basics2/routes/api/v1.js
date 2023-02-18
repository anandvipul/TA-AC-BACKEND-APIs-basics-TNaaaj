let express = require("express");
let router = express.Router();
let Country = require("../../models/Country");

router.get("/", (req, res, next) => {
    res.json({"message": "All Countries"});
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;