const mongoose = require("mongoose");

// Create Schema
const user= new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
    });

module.exports = mongoose.model("User", user);
