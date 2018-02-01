var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var liquidSchema = new Schema({
    _id            : Number,
    user_id        : Number,
    base           : Number,
    aroma          : Number,
    maceracion     : Number,
    estado         : String,
    nicotina       : Number,
    nombre         : String,
    fecha_creacion : Date,
    cantidad       : Number,
    favorito       : Boolean,
    descripcion    : String
});

var Liquids = mongoose.model('Liquid', liquidSchema);
module.exports = Liquids;