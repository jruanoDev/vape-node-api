var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var baseSchema = ({
    _id        : {type: Number, unique: true},
    marca      : String,
    cantidad   : Number,
    proporcion : String,
    nicotina   : Number,
    estado     : String
});

var Base = mongoose.model('Base', baseSchema);
module.exports = Base;