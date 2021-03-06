var mongoose = require('mongoose');
var Flavours  = mongoose.model('Flavour');

exports.listAllFlavours = function(req, res) {
    Flavours.find({user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        res.json(data);
    });
};

exports.createFlavour = function(req, res) {
    var flavour = new Flavours(req.body);
    flavour.save(function(err, data) {
        if(err) res.send(err);
        
        res.status(200).json({
            "message": "Flavour added successfully"
        });
    });
};

exports.updateFlavour = function(req, res) {
    Flavours.update({_id: req.params.id, user_id: req.headers.user_id},
                    req.body, {upsert: true, new: true}, function(err, data) {
        if(err) throw err;
        res.status(200).json({
            "message": "Flavour updated successfully"
        });
    });
}

exports.deleteFlavour = function(req, res) {
    Flavours.remove({_id: req.params.id, user_id: req.headers.user_id}, function(err, data) {
        if(err) throw err;
        
        res.status(200).json({
            "message": "Flavour deleted successfully"
        });
    });
};