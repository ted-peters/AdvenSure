// const bcrypt = require("bcryptjs");
// const User = require("../models/user");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};


// passport.serializeUser((user, cb) => {
//     cb(null, user.id);
// });

// passport.deserializeUser((id, cb) => {
//     User.findById(id, (err, user) => {
//         cb(err, user);
//     });
// });

// // Local Strategy
// passport.use(
//     new LocalStrategy((name, email, password, done) => {
//         // Match User
//         User.findOne({ email: email })
//             .then(user => {
//                 // Create new User
//                 if (!user) {
//                     const newUser = new User({ email, password });
//                     // Hash password before saving in database
//                     bcrypt.genSalt(10, (err, salt) => {
//                         bcrypt.hash(newUser.password, salt, (err, hash) => {
//                             if (err) throw err;
//                             newUser.password = hash;
//                             newUser
//                                 .save()
//                                 .then(user => {
//                                     return done(null, user);
//                                 })
//                                 .catch(err => {
//                                     return done(null, false, { message: err });
//                                 });
//                         });
//                     });
//                     // Return other user
//                 } else {
//                     // Match password
//                     bcrypt.compare(password, user.password, (err, isMatch) => {
//                         if (err) throw err;

//                         if (isMatch) {
//                             return done(null, user);
//                         } else {
//                             return done(null, false, { message: "Wrong password" });
//                         }
//                     });
//                 }
//             })
//             .catch(err => {
//                 return done(null, false, { message: err });
//             });
//     })
// );

// module.exports = passport;
