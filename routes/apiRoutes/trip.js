const router = require('express').Router();

const tripController = require('../../controllers/tripcontroller');

router.route('/').get(tripController.findAll).post(tripController.create);

module.exports = router;