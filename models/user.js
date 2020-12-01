const mongoose = require("mongoose");

// Create Schema
const user= new mongoose.Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
    });

module.exports = mongoose.model("User", user);
