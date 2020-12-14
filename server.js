const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
const routes = require("./routes");
const app = express();
require('dotenv').config();
//----------------------------------------- END OF IMPORTS---------------------------------------------------

// .connect() function to connect either mongodb.com/atlas or localhost mongo database
mongoose.connect(process.env.MONGODBURL || "mongodb://localhost/AdvenSure", { useNewUrlParser: true, useUnifiedTopology: true });
// to check status of your mongodb connection
mongoose.connection.on('connected', function () { console.log("Mongo DB connected") });
mongoose.connection.on('error', function (err) { console.error(err) });
mongoose.connection.on('disconnected', function () { console.log("Mongo DB disconnected") });

// connect front-end
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passport/passportConfig.js")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user,) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.get('/logout', function(req, res){
  req.logout();
  res.json(true);
});

app.post("/api/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.get("/api/user", (req, res) => {
  if (!req.user) {
    return res.status(401).json(false)
  } else {
    return res.json(req.user)
  }

});

// express using router function which exporting from routes folder
app.use(routes);
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
// .listen() function to run your domain name = advensure.com || advensure.herokuapp.com || advensure.github.io || localhost:3001
app.listen(process.env.PORT || 3001, function () {
  console.log('Express Server Listening on 3001');
})




