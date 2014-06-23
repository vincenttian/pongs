var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000/oauth/linkedin/callback');
var linkedin;

var User = require('../app/models/user');

var jsnx = require('../JSNetworkX');
var G = new jsnx.Graph();

module.exports = function(app, passport) {
    var passport = require('passport');

    app.get('/oauth/linkedin', isLoggedIn, function(req, res) {
        Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups']);
    });

    app.get('/oauth/linkedin/callback', isLoggedIn, function(req, res) {
        Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
            if (err) return console.error(err);
            results = JSON.parse(results);
            linkedin = Linkedin.init(results["access_token"]);
            linkedin.people.me(['id', 'first-name', 'last-name', 'connections', 'emailAddress', 'courses', 'following', 'groupMemberships', 'interests', 'location', 'skills', 'positions'], function(err, $in) {
                // linkedin.people.me(function(err, $in) {
                if (err) return err;
                // add additional data to user model
                User.findOne({
                    'linkedin_email': $in['emailAddress']
                }, function(err, user) {
                    if (err) // if there are any errors, return the error
                        return done(err);
                    if (user == null || user == undefined) {
                        console.log('local email and linkedin email do not match up');
                        res.render('profile.ejs', {
                            user: req.user // get the user out of session and pass to template
                        });
                    }

                    // Examine $in
                    // res.json({
                    //     info: $in
                    // });
                    // return;

                    user.linkedin_id = $in['id'];
                    user.linkedin_name = $in['firstName'];
                    user.linkedin_token = results["access_token"];
                    var courses = [],
                        follow_companies = [],
                        follow_people = [],
                        groups = [],
                        skills = [],
                        connections = [],
                        positions = [];
                    for (var i = 0; i < $in['positions']['_total']; i++) {
                        var p = {};
                        p['company'] = $in['positions']['values'][i]['company']['name'];
                        p['title'] = $in['positions']['values'][i]['title'];
                        p['is_current'] = $in['positions']['values'][i]['isCurrent'];
                        p['industry'] = $in['positions']['values'][i]['company']['industry'];
                        positions.push(p)
                    }
                    user.positions = JSON.stringify(positions);

                    for (var i = 0; i < $in['courses']['_total']; i++) {
                        courses.push($in['courses']['values'][i]['name'])
                    }
                    user.courses = courses;
                    for (var i = 0; i < $in['following']['companies']['_total']; i++) {
                        follow_companies.push($in['following']['companies']['values'][i]['name'])
                    }
                    user.follow_companies = follow_companies;
                    for (var i = 0; i < $in['following']['people']['_total']; i++) {
                        follow_people.push($in['following']['people']['values'][i]['name'])
                    }
                    user.follow_people = follow_people;
                    for (var i = 0; i < $in['groupMemberships']['_total']; i++) {
                        groups.push($in['groupMemberships']['values'][i]['group']['name'])
                    }
                    user.groups = groups;
                    user.interests = $in['interests'];
                    for (var i = 0; i < $in['skills']['_total']; i++) {
                        skills.push($in['skills']['values'][i]['skill']['name'])
                    }
                    user.skills = skills;
                    user.location = $in['location']['name'];
                    for (var i = 0; i < $in['connections']['_count']; i++) {
                        var connect = {};
                        var person = $in['connections']['values'][i];
                        if (person['apiStandardProfileRequest'] == undefined) {
                            connect['linkedin_url'] = person['apiStandardProfileRequest'];
                        } else {
                            connect['linkedin_url'] = person['apiStandardProfileRequest']['url'];
                        }
                        if (person['location'] == undefined) {
                            connect['location'] = person['location'];
                        } else {
                            connect['location'] = person['location']['name'];
                        }
                        connect['firstName'] = person['firstName'];
                        connect['id'] = person['id'];
                        connect['industry'] = person['industry'];
                        connect['lastName'] = person['lastName'];
                        connections.push(connect);
                    }
                    user.connections = JSON.stringify(connections);
                    user.save(function(err) {
                        if (err) return err;
                    });
                    G.add_node(user.linkedin_id, user);
                    for (var i = 0; i < connections.length; i++) {
                        try { // check if a given friend is already in the graph based on linkedin id
                            var test = G.node.get(user.linkedin_id);
                            G.add_edge(user.linkedin_id, connections[i]['id']);
                        } catch (err) { // if not found, catch error and add user 
                            G.add_node(connections[i]['id'], connections[i]);
                            G.add_edge(user.linkedin_id, connections[i]['id']);
                        }
                    }
                    res.render('profile.ejs', {
                        user: user
                    });
                });
            });
        });
    });

    // HOME PAGE (with login links) 
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // LOGIN: show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // SIGNUP: show the signup form
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // PROFILE SECTION 
    // we will want this protected so you have to be logged in to visit
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    // LOGOUT 
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}
