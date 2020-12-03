const db = require('../models/trip');

module.exports = {
    findAll: function(req, res){
        db.Trip
        .find(req.query).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Trip
        .create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    }
}