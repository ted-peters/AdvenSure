const router = require("express").Router();

const tripRouter = require('./trip');

router.use('/user', tripRouter)

module.exports = router;