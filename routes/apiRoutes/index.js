const router = require("express").Router();

const tripRouter = require('./trip');

router.use('/', tripRouter)

module.exports = router;