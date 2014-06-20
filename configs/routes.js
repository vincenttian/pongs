var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000');
var linkedin = Linkedin.init('a3af357c-f074-4935-8e9a-3e6533f86465');

module.exports = function(app) {
    // Index page
    app.get('/', function(req, res) {
        res.render('index.ejs', {
            title: 'LinkedIn Tinder'
        });
    });

    app.get('/oauth/linkedin', function(req, res) {
        // This will ask for permisssions etc and redirect to callback url.
        Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages']);
    });

    app.get('/oauth/linkedin/callback', function(req, res) {
        Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
            if (err) return console.error(err);
            console.log(results);
            return res.redirect('/');
        });
    });
}
