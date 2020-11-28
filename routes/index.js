// path is in-built in node, getting that from node_modules
const path= require('path');
// express router
const router = require('express').Router();
const passport = require("passport");
//link api

router.use(function(req, res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
});

module.exports = router;


module.exports = router;