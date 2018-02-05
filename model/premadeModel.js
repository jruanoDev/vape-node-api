var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var premadeSchema = ({
    _id      : Number,
    user_id  : String,
    marca    : String,
    cantidad : Number,
    nicotina : Number,
    base     : Number
});

var Premade = mongoose.model('Premade', premadeSchema);
module.exports = Premade;