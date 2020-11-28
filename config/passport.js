const passport=require('passport');
const LocalStrategy= require("passport-local").Strategy;

passport.use(new LocalStrategy (
    {
        usernameField: 'email'
    },
    function(email, password, done) {
        db.Users.findOne({
            where: {
                email:email
            }
        }).then(function(dbUser) {
            if (!dbUser) { 
                return done (null, false , {
                    message: "incorrect email."
                });
            }
            return done(null,dbUser);
        });
    }
));

passport.serializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.deserializeUser(function(obj,cb) {
    cb(null, obj);
});

module.exports = passport;
