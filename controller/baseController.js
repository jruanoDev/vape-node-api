var mongoose = require('mongoose');
var Bases  = mongoose.model('Base');

exports.listAllBases = function(req, res) {
    Bases.find({user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        res.json(data);
    });
};

exports.createBase = function(req, res) {
    var base = new Bases(req.body);
    base.save(function(err, data) {
        if(err) res.send(err);
        
        res.status(200).json({
            "message": "Base added successfully"
        });
    });
};

exports.updateBase = function(req, res) {
    Bases.update({_id: req.params.id, user_id: req.headers.user_id}, 
                 req.body, {upsert: true, new: true}, function(err, data) {
        if(err) throw err;
        res.status(200).json({
            "message": "Base updated successfully"
        });
    });
}

exports.deleteBase = function(req, res) {
    Bases.remove({_id: req.params.id, user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        
        res.status(200).json({
            "message": "Base deleted successfully"
        });
    });
};