let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let State = require('./State');

let country = new Schema({
    name: {type: String},
    states: {type: [Schema.Types.ObjectId], ref: State},
    continent: {type: String},
    population: {type: Number},
    ethinicity: {type: String},
    neighbouring_countries: {type: [Schema.Types.ObjectId], ref: Country},

}, {timestamps: true});


module.exports = mongoose.model("Country", country);