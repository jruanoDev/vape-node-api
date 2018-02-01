var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var baseSchema = ({
    _id        : Number,
    user_id    : Number,
    marca      : String,
    cantidad   : Number,
    proporcion : String,
    nicotina   : Number,
    estado     : String
});

var Base = mongoose.model('Base', baseSchema);
module.exports = Base;