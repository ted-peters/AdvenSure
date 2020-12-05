const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {
     type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  trip: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip"}]
});
const trip = new mongoose.Schema({
    startDate: { type: String},
    endDate: { type: String},
    title: { type: String},
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    checklist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Checklist"}]
})
const checklist = new mongoose.Schema({
  name: {type: String},
  listItems: {type: Array},
  trip: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip"}]
})
module.exports = mongoose.model("User", user);
module.exports = mongoose.model("Trip", trip);
module.exports = mongoose.model("Checklist", checklist);
