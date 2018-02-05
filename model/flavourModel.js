var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flavourSchema = ({
    _id         : Number,
    user_id     : String,
    nombre      : String,
    marca       : String,
    descripcion : String,
    estado      : Boolean, 
    cantidad    : Number
});

var Flavour = mongoose.model('Flavour', flavourSchema);
module.exports = Flavour;