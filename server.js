// importing express function from node_modules
const express = require('express');
// put express function into app variable
const app = express();
// importing dotenv config funciton to connect .env file with server.js
require('dotenv').config();
// connecting routes/index.js folder 
const routes = require('./routes');

// for all apps you need this
// express for url and json language
// example : localhost:3001/ - homepage, localhost:3001/my-checklist - extended url
app.use(express.urlencoded({extended: true}));
app.use(express.json);
// connect front-end
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// importing mongoose function from node_modules
const mongoose = require('mongoose');
// .connect() function to connect either mongodb.com/atlas or localhost mongo database
mongoose.connect(process.env.MONGODBURL || "mongodb://localhost/advensure", {useNewUrlParser: true, useUnifiedTopology: true});
// to check status of your mongodb connection
mongoose.connection.on('connected', function(){console.log("Mongo DB connected")});
mongoose.connection.on('error', function(err){console.error(err)});
mongoose.connection.on('disconnected', function(){console.log("Mongo DB disconnected")});

// express using router function which exporting from rotes folder
app.use(routes);

// .listen() function to run your domain name = advensure.com || advensure.herokuapp.com || advensure.github.io || localhost:3001
app.listen(process.env.PORT || 3001, function(){
    console.log('Express Server Listening on 3001');
})
