var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    winston = require('winston'),
    flash = require('connect-flash'),
    passport = require('passport'),
    mongoose = require('mongoose');

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

// Database stuff
// var configDB = require('./configs/database.js');
// mongoose.connect(configDB.url); // connect to our database
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
    if (!err) {
        console.log("MongoDB is connected");
    }
});

// load express settings
require('./configs/express')(app, nconf, express, logger);

// Bootstrap routes
require('./configs/routes')(app);

// start server
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
