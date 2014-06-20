var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000/oauth/linkedin/callback');
var linkedin;

module.exports = function(app) {
    // Index page
    app.get('/', function(req, res) {
        res.render('index.ejs', {
            title: 'LinkedIn Tinder'
        });
    });

    app.get('/data', function(req, res) {
        linkedin.people.me(function(err, $in) {
            if (err) return err;
            res.json({
                profile: $in
            })
        });

        // linkedin.people.id('160598580', function(err, $in) {
        //     // Loads the profile by id.
        //     console.log($in);
        // });
    })

    app.get('/oauth/linkedin', function(req, res) {
        Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups']);
    });

    app.get('/oauth/linkedin/callback', function(req, res) {
        Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
            if (err) return console.error(err);
            results = JSON.parse(results);
            linkedin = Linkedin.init(results["access_token"]);
            return res.redirect('/');
        });
    });
}
