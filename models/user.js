const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  date: {
    type: Date,
    default: Date.now
  },
  trips:[{
    tripId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Trip"
    }
  }]
});

module.exports = mongoose.model("User", user);
