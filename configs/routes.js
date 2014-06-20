var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000/oauth/linkedin/callback');
var linkedin;

module.exports = function(app) {

    // Unauthenticated Index page
    app.get('/', function(req, res) {
        res.render('index_unauthenticated.ejs', {
            title: 'LinkedIn Tinder'
        });
    });

    // Authenticated Index page
    app.get('/index', function(req, res) {
        // Query for more atributes here to load in database
        linkedin.people.me(['id', 'first-name', 'last-name'], function(err, $in) {
            res.render('index.ejs', {
                title: 'LinkedIn Tinder',
                username: $in['firstName']
            });
        });
    });

    app.get('/data', function(req, res) {
        linkedin.people.me(function(err, $in) {
            if (err) return err;
            res.json({
                profile: $in
            })
        });
    });

    app.get('/oauth/linkedin', function(req, res) {
        Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups']);
    });

    app.get('/oauth/linkedin/callback', function(req, res) {
        Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
            if (err) return console.error(err);
            results = JSON.parse(results);
            linkedin = Linkedin.init(results["access_token"]);
            return res.redirect('/index');
        });
    });
}
