let express = require("express");
let router = express.Router();
let Country = require("../../models/Country");
let State = require("../../models/State");

router.get("/", (req, res, next) => {
    res.json({"message": "All Countries"});
});

router.post("/", (req, res, next) => {
    // console.log(req.body.states);
    let statesList = [];
    let neighbouringCountries = [];
    Object.keys(req.body.states).forEach(element => {
        statesList.push(new State({
            name: req.body.states[element]
        }).save());
    });
    Object.keys(req.body.neighbouring_countries).forEach(element => {
        neighbouringCountries.push(new Country({
            name: req.body.neighbouring_countries[element]
        }).save());
    });
    // console.log(Object.keys(req.body.states).forEach(element => {`${element}`}));
    let newCountry = new Country({
        name: req.body.name,
        states: statesList,
        continent: req.body.continent,
        population: req.body.population,
        ethinicity: req.body.ethinicity,
        neighbouring_countries: neighbouringCountries
    });
    newCountry.save((err, data) => {
        err ? console.log(err) : console.log(data);
    });
    res.json({"message": "Success"});
});

module.exports = router;