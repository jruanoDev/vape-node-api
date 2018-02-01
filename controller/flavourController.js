var mongoose = require('mongoose');
var Flavours  = mongoose.model('Flavour');

exports.listAllFlavours = function(req, res) {
    Flavours.find({}, function(err, data) {
        if(err) throw err;
        res.json(data);
    });
};

exports.createFlavour = function(req, res) {
    var flavour = new Flavours(req.body);
    flavour.save(function(err, data) {
        if(err) res.send(err);
        
        res.status(301).json("Aroma añadido correctamente. " + flavour);
    });
};

exports.updateFlavour = function(req, res) {
    Flavours.update({_id: req.params.id}, req.body, {upsert: true, new: true}, function(err, data) {
        if(err) throw err;
        res.status(301).json("Aroma actualizado correctamente. ID: " + req.params.id);
    });
}

exports.deleteFlavour = function(req, res) {
    Flavours.remove({_id: req.params.id}, function(err, data) {
        if(err) throw err;
        
        res.status(301).json("Aroma borrado correctamente. ID: " + req.params.id);
    });
};