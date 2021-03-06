var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    winston = require('winston'),
    flash = require('connect-flash'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    partials = require('express-partials');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'local';
}

// Logging
var logger = new(winston.Logger)({
    transports: [new(winston.transports.Console)({
        colorize: true
    })]
});

// Load configurations
var env = process.env.NODE_ENV,
    nconf = require('nconf');

// merge nconf overrides with the configuration file.
nconf.argv().env().file({
    file: env + '.json'
});
nconf.set('approot', __dirname); // set approot root

var app = express();
app.use(partials());

app.use(express.static(__dirname + "/public"));
app.use(express.cookieParser());
app.use(express.bodyParser()); // get information from html forms
app.use(express.session({
    secret: '1234567890QWERTY'
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./configs/passport')(passport); // pass passport for configuration

// load express settings
require('./configs/express')(app, nconf, express, logger);

var server = require('http').createServer(app);
exports.server = server;

// Bootstrap routes
require('./configs/routes')(app);

// Start server
server.listen(app.get('port'), function() {
    console.log('Server listening at port %d', app.get('port'));
});

// Database
var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/test';
mongoose.connect(mongoUri);
var mongo = require('mongodb');
mongo.Db.connect(mongoUri, function(err, db) {
    db.collection('mydocs', function(er, collection) {
        collection.insert({
            'mykey': 'myvalue'
        }, {
            safe: true
        }, function(er, rs) {});
    });
});