var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var baseSchema = ({
    _id        : Number,
    user_id    : String,
    brand      : String,
    quantity   : Number,
    proportion : String,
    nicotin    : Number,
    state      : Boolean
});

var Base = mongoose.model('Base', baseSchema);
module.exports = Base;