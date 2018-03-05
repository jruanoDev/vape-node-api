var express    = require('express'),
    app        = express(),
    port       = process.env.PORT || 8080,
    mongoose   = require('mongoose'),
    Liquid     = require('./model/liquidModel'),
    Flavour    = require('./model/flavourModel'),
    Base       = require('./model/baseModel'),
    Premade    = require('./model/premadeModel'),
    User       = require('./model/userModel'),
    bodyParser = require('body-parser');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/vapeplanner');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

var routes = require('./routes/routes');
routes(app);

app.listen(port);
console.log('Server listening on port ' + port);
