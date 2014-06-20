var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000/oauth/linkedin/callback');
var linkedin;

// OLD AUTHENTICATION

// module.exports = function(app) {

//     // Unauthenticated Index page
//     app.get('/', function(req, res) {
//         console.log(req.session);
//         res.render('index_unauthenticated.ejs', {
//             title: 'LinkedIn Tinder'
//         });
//     });

//     // Authenticated Index page
//     app.get('/index', function(req, res) {
//         console.log(req.session);
//         // Query for more atributes here to load in database
//         linkedin.people.me(['id', 'first-name', 'last-name'], function(err, $in) {
//             res.render('index.ejs', {
//                 title: 'LinkedIn Tinder',
//                 username: $in['firstName']
//             });
//         });
//     });

//     app.get('/data', function(req, res) {
//         console.log(req.session);
//         linkedin.people.me(function(err, $in) {
//             if (err) return err;
//             res.json({
//                 profile: $in
//             })
//         });
//     });

//     app.get('/oauth/linkedin', function(req, res) {
//         Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups']);
//     });

//     app.get('/oauth/linkedin/callback', function(req, res) {
//         Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
//             if (err) return console.error(err);
//             results = JSON.parse(results);
//             linkedin = Linkedin.init(results["access_token"]);
//             return res.redirect('/index');
//         });
//     });
// }


// BEGIN PASSPORT TUTORIAL SIGNUP

// app/routes.js
module.exports = function(app, passport) {
    var passport = require('passport');

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


};

// route middleware to make sure a user is logged in

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
