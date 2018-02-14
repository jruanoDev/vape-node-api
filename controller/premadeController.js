var mongoose = require('mongoose');
var Premades  = mongoose.model('Premade');

exports.listAllPremades = function(req, res) {
    Premades.find({user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        res.json(data);
    });
};

exports.createPremade = function(req, res) {
    var premade = new Premades(req.body);
    premade.save(function(err, data) {
        if(err) res.send(err);
        
        res.status(200).json({
            "message": "Premade added successfully"
        });
    });
};

exports.updatePremade = function(req, res) {
    Premades.update({_id: req.params.id, user_id: req.headers.user_id}, req.body, {upsert: true, new: true}, function(err, data) {
        if(err) throw err;
        res.status(200).json({
            "message": "Premade updated successfully"
        });
    });
}

exports.deletePremade = function(req, res) {
    Premades.remove({_id: req.params.id, user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        
        res.status(200).json({
            "message": "Premade deleted successfully"
        });
    });
};