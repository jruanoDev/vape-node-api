var mongoose = require('mongoose');
var Bases  = mongoose.model('Base');

exports.listAllBases = function(req, res) {
    Bases.find({}, function(err, data) {
        if(err) throw err;
        res.json(data);
    });
};

exports.createBase = function(req, res) {
    var base = new Bases(req.body);
    base.save(function(err, data) {
        if(err) res.send(err);
        
        res.status(301).json("Base añadida correctamente. " + base);
    });
};

exports.updateBase = function(req, res) {
    Bases.update({_id: req.params.id}, req.body, {upsert: true, new: true}, function(err, data) {
        if(err) throw err;
        res.status(301).json("Base actualizada correctamente. ID: " + req.params.id);
    });
}

exports.deleteBase = function(req, res) {
    Bases.remove({_id: req.params.id}, function(err, data) {
        if(err) throw err;
        
        res.status(301).json("Base borrada correctamente. ID: " + req.params.id);
    });
};