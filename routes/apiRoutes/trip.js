const router = require('express').Router();

const tripController = require('../../controllers/tripcontroller');

router.route('/user').get(tripController.findAll).post(tripController.create);

module.exports = router;