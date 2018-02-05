var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flavourSchema = ({
    _id         : Number,
    user_id     : String,
    name        : String,
    brand       : String,
    description : String,
    state       : Boolean, 
    quantity    : Number
});

var Flavour = mongoose.model('Flavour', flavourSchema);
module.exports = Flavour;