var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true, 
        unique: true
        /*match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/*/
    },
    password: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);
module.exports = User;