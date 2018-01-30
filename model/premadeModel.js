var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var premadeSchema = ({
    _id      : Number,
    marca    : String,
    cantidad : Number,
    nicotina : Number,
    base     : Number
});

var Premade = mongoose.model('Premade', premadeSchema);
module.exports = Premade;