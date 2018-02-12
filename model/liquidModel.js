var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var liquidSchema = new Schema({
    _id            : Number,
    user_id        : String,
    base           : Number,
    flavour        : Number,
    maceration     : Number,
    state          : Boolean,
    nicotine       : Number,
    name           : String,
    creation_date  : {type: Date, default: Date.now()},
    quantity       : Number,
    favourite      : Boolean,
    description    : String
});

var Liquids = mongoose.model('Liquid', liquidSchema);
module.exports = Liquids;