var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var liquidSchema = new Schema({
    _id            : Number,
    user_id        : String,
    base           : Number,
    aroma          : Number,
    maceracion     : Number,
    estado         : Boolean,
    nicotina       : Number,
    nombre         : String,
    fecha_creacion : {type: Date, default: Date.now()},
    cantidad       : Number,
    favorito       : Boolean,
    descripcion    : String
});

var Liquids = mongoose.model('Liquid', liquidSchema);
module.exports = Liquids;