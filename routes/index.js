// path is in-built in node, getting that from node_modules
const path= require('path');
// express router
const router = require('express').Router();

const apiRoutes = require("./apiRoutes");
//link api
router.use('/api', apiRoutes);

router.use(function(req, res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;
