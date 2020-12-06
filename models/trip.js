const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newTrip = new Schema({
    _id: { type: String},
    startDate: { type: String},
    endDate: { type: String},
    title: { type: String}
});

const Trip = mongoose.model("Trip", newTrip);

module.exports = Trip;