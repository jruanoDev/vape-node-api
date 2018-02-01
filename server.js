var express    = require('express'),
    app        = express(),
    port       = process.env.PORT || 8080,
    mongoose   = require('mongoose'),
    Liquid     = require('./model/liquidModel'),
    Flavour    = require('./model/flavourModel'),
    Base       = require('./model/baseModel'),
    Premade    = require('./model/premadeModel'),
    bodyParser = require('body-parser');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/vapeplanner');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app);

app.listen(port);
console.log('Server listening on port ' + port);