var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var premadeSchema = ({
    _id      : Number,
    user_id  : String,
    brand    : String,
    quantity : Number,
    nicotin  : Number,
    base     : Number
});

var Premade = mongoose.model('Premade', premadeSchema);
module.exports = Premade;