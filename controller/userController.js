var mongoose = require('mongoose');
var Users  = mongoose.model('User');
var bcrypt = require('bcrypt');

exports.createUser = function(req, res) {
    Users.find({email: req.body.email}).exec().then(function(user) {
        if(user.length >= 1) {
           return res.status(409).json({
               error: 'User already exists'
           });
            
        } else {
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    var user = new Users({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash 
                    });

                    user.save().then(function(result) {
                        res.status(201).json({
                            message: 'User created'
                        });
                    }).catch()
                }
            });
        }
    }).catch();  
};

exports.deleteUser = function(req, res) {
    Users.remove({_id: req.params.id}).exec().then(function(result) {
        res.status(200).json({
            message: 'User deleted'
        });
    }).catch(function(err) {
        res.status(500).json({
            error: err
        });
    });
}