const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
});

module.exports = mongoose.model("User", user);
