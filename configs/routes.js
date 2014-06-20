var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000');
var linkedin = Linkedin.init('92fe35de-ff85-464d-ba44-9d6424367825');
var http = require('http');
var https = require("https");

module.exports = function(app) {
    // Index page
    app.get('/', function(req, res) {
        res.render('index.ejs', {
            title: 'LinkedIn Tinder'
        });
    });

    app.get('/data', function(req, res) {
        linkedin.people.me(function(err, $in) {
            // Loads the profile of access token owner.
            console.log($in);
        });


        // var url = "http://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=452p27539u5f&state=DCEEFWF45453sdffef424&redirect_uri=http://localhost:3000";
        // http.get(url, function(res) {
        //     var data;
        //     res.setEncoding('utf8');
        //     res.on('data', function(chunk) {
        //         if (!data) data = chunk;
        //         else data += chunk;
        //     }).on('end', function() {
        //         console.log(data);
        //     });
        // }).on('error', function(e) {
        //     console.log("Got error: " + e.message);
        // });


        // var url2 = "http://api.linkedin.com/v1/people/~";
        // http.get(url2, function(res) {
        //     var data;
        //     res.setEncoding('utf8');
        //     res.on('data', function(chunk) {
        //         if (!data) data = chunk;
        //         else data += chunk;
        //     }).on('end', function() {
        //         console.log(data);
        //     });
        // }).on('error', function(e) {
        //     console.log("Got error: " + e.message);
        // });


        return;
        res.resnder('data.ejs', {
            info: 'blah'
        })
    })

    app.get('/oauth/linkedin', function(req, res) {
        // This will ask for permisssions etc and redirect to callback url.
        Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages']);
    });

    app.get('/oauth/linkedin/callback', function(req, res) {
        console.log(req.query.code);
        Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
            if (err) return console.error(err);
            console.log(results);
            return res.redirect('/');
            // AQT0F86wGzhs4wZ0Xo2-54j28XRP6lTwYhqUAQx2pOJkP9SxfKlifRGcTN-3c5tNIXQ-aB2l_ooyNkWmiOtFmCKIYpMAyVOjFd4FWAZaWfcc9VpeQao
        });
    });
}
