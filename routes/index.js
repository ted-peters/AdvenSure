// path is in-built in node, getting that from node_modules
const path= require('path');
// express router
const router = require('express').Router();
const passport = require("passport");
//link api

router.use(function(req, res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;
