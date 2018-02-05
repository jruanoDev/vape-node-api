var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var baseSchema = ({
    _id        : Number,
    user_id    : String,
    marca      : String,
    cantidad   : Number,
    proporcion : String,
    nicotina   : Number,
    estado     : Boolean
});

var Base = mongoose.model('Base', baseSchema);
module.exports = Base;