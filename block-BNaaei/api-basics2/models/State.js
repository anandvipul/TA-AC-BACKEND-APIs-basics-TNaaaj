let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Country = require("./Country");

let state = new Schema({
    name: {type: String},
    country: {type: Schema.Types.ObjectId, ref: "Country"},
    population: {type: Number},
    area: {type: Number},
    neighbouring_states: {type: [Schema.Types.ObjectId], ref: "State"}
}, {timestamps: true});


module.exports = mongoose.model("State", state);