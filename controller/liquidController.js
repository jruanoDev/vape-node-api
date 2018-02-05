var mongoose = require('mongoose');
var Liquids  = mongoose.model('Liquid');

exports.listAllLiquids = function(req, res) {
    Liquids.find({user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        res.json(data);
    });
};

exports.createLiquid = function(req, res) {
    var liquid = new Liquids(req.body);
    liquid.save(function(err, data) {
        if(err) res.send(err);
        
        res.status(301).json("Liquido añadido correctamente. " + liquid);
    });
};

exports.updateLiquid = function(req, res) {
    Liquids.update({_id: req.params.id, user_id: req.headers.user_id},
                   req.body, {upsert: true, new: true}, function(err, data) {
        if(err) throw err;
        res.status(301).json("Liquido actualizado correctamente. ID: " + req.params.id);
    });
}

exports.deleteLiquid = function(req, res) {
    Liquids.remove({_id: req.params.id, user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        
        res.status(301).json("Liquido borrado correctamente. ID: " + req.params.id);
    });
};