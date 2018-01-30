var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flavourSchema = ({
    _id         : Number,
    nombre      : String,
    marca       : String,
    descripcion : String,
    estado      : String, 
    cantidad    : Number
});

var Flavour = mongoose.model('Flavour', flavourSchema);
module.exports = Flavour;