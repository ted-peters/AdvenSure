const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(false),
      message: "Please enter a valid email address"
    }
  },
  password: {
    type: String, 
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// const User = db.model("User", userSchema);
// const user = new User();

// user.email = "test@test.com";
// user.name = "test";
// user.validate().catch(error => {
//   assert.ok(error);
//   assert.equal(error.errors["email"].message, "Please enter a valid email address")
// })

module.exports = User = mongoose.model("Users", userSchema);
