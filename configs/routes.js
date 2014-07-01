// Dev Config
var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://localhost:3000/oauth/linkedin/callback');
// Prod Config
// var Linkedin = require('node-linkedin')('452p27539u5f', '3q1iiaeQph2wRH4M', 'http://pongs.herokuapp.com/oauth/linkedin/callback');
var linkedin;

// SOCIAL MEDIA

// Facebook
var FB = require('fb'),
    Step = require('step');

// Dev FB Config
// FB.options({
//     appId: '1519833888232441',
//     appSecret: 'ddc71639c0210e3fc36c8899f621b2dc',
//     redirectUri: 'http://localhost:3000/fb/callback'
// });

// Prod FB Config
FB.options({
    appId: '1519833888232441',
    appSecret: 'ddc71639c0210e3fc36c8899f621b2dc',
    redirectUri: 'pongs.herokuapp.com/fb/callback'
});

// Twitter
var util = require('util'),
    twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'Op2qHGrxZQL4RtT1HegPmVEDh',
    consumer_secret: 'ln0I8sO2ElWHnbH0LwzpFZeN2GZi3PiNTTh2kPcyF9PYkjj2P2',
    access_token_key: '2586249781-0RTNGUdm8w48277vzsY4vMlWhmD8YUX4vAojYIW',
    access_token_secret: 'DJqiNb6h8NdPC0qFSFAgQYlv7KQSIf5yfJr2XHZoT3nsa'
});

// END SOCIAL MEDIA
var flash = require('connect-flash');

var serverModule = require('../server');
var server = serverModule.server;
var io = require('socket.io')(server);

var User = require('../app/models/user');
var allPeople = require('../app/models/all_people');

var jsnx = require('../JSNetworkX');
var G = new jsnx.Graph();

module.exports = function(app, passport) {
    var passport = require('passport');

    app.use(app.router);
    app.use(function(req, res, next) {
        res.status(404);
        if (req.accepts('html')) {
            res.render('404', {
                url: req.url,
                layout: false
            });
            return;
        }
        if (req.accepts('json')) {
            res.send({
                error: 'Not found'
            });
            return;
        }
        res.type('txt').send('Not found');
    });

    app.get('/oauth/linkedin', isLoggedIn, function(req, res) {
        Linkedin.auth.authorize(res, ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups']);
    });

    app.get('/oauth/linkedin/callback', isLoggedIn, function(req, res) {
        var fbaccessToken = req.session.access_token;
        Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
            if (err) return console.error(err);
            results = JSON.parse(results);
            linkedin = Linkedin.init(results["access_token"]);
            linkedin.people.me(['id', 'first-name', 'last-name', 'connections', 'emailAddress', 'courses', 'following', 'groupMemberships', 'interests', 'location', 'skills', 'positions', 'industry', 'pictureUrl', 'publicProfileUrl'], function(err, $in) {
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
                        if (!fbaccessToken) {
                            res.render('profile.ejs', {
                                user: req.user, // get the user out of session and pass to template
                                loginUrl: FB.getLoginUrl({
                                    scope: 'publish_actions'
                                }),
                                message: req.flash('info')
                            });
                        }
                    }

                    // Examine $in
                    // res.json({
                    //     info: $in
                    // });
                    // return;

                    user.linkedin_id = $in['id'];
                    user.linkedin_name = $in['firstName'];
                    user.linkedin_token = results["access_token"];
                    user.picture = $in['pictureUrl'];
                    user.linkedin_url = $in['publicProfileUrl'];
                    user.industry = $in['industry'];
                    var courses = [],
                        follow_companies = [],
                        follow_people = [],
                        groups = [],
                        skills = [],
                        connections = [],
                        positions = [];
                    var totalPositions = $in['positions']['_total'];
                    for (var i = 0; i < totalPositions; i++) {
                        var p = {};
                        p['company'] = $in['positions']['values'][i]['company']['name'];
                        p['title'] = $in['positions']['values'][i]['title'];
                        p['is_current'] = $in['positions']['values'][i]['isCurrent'];
                        p['industry'] = $in['positions']['values'][i]['company']['industry'];
                        positions.push(p);
                    }
                    user.positions = JSON.stringify(positions);

                    for (var i = 0; i < $in['courses']['_total']; i++) {
                        courses.push($in['courses']['values'][i]['name']);
                    }
                    user.courses = courses;
                    for (var i = 0; i < $in['following']['companies']['_total']; i++) {
                        follow_companies.push($in['following']['companies']['values'][i]['name']);
                    }
                    user.follow_companies = follow_companies;
                    for (var i = 0; i < $in['following']['people']['_total']; i++) {
                        follow_people.push($in['following']['people']['values'][i]['name']);
                    }
                    user.follow_people = follow_people;
                    for (var i = 0; i < $in['groupMemberships']['_total']; i++) {
                        groups.push($in['groupMemberships']['values'][i]['group']['name']);
                    }
                    user.groups = groups;
                    var interests = $in['interests'];
                    user.interests = (interests === undefined) ? "" : interests; //do I need to check this for all fields?
                    for (var i = 0; i < $in['skills']['_total']; i++) {
                        skills.push($in['skills']['values'][i]['skill']['name']);
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
                        connect['picture'] = person['pictureUrl'];
                        connections.push(connect);

                        function addAllPersonDB(c) {
                            allPeople.findOne({
                                'linkedin_id': c['id']
                            }, function(err, res) {
                                if (err) // if there are any errors, return the error
                                    return done(err);
                                if (res == null || res == undefined) {
                                    // person is not yet in database; add person
                                    var p = new allPeople({
                                        linkedin_id: c['id'],
                                        first_name: c['firstName'],
                                        last_name: c['lastName'],
                                        location: c['location'],
                                        linkedin_url: c['linkedin_url'],
                                        industry: c['industry'],
                                        picture: c['picture']
                                    });
                                    p.save(function(err) {
                                        if (err) return err;
                                    });
                                } else {
                                    // do nothing
                                    // console.log('person: ' + res + ' is already in database');
                                }
                            });
                        }
                        addAllPersonDB(connect);
                    }

                    // Adds user himself into allPersonDB

                    function addUser(c) {
                        allPeople.findOne({
                            'linkedin_id': c['id']
                        }, function(err, res) {
                            if (err) // if there are any errors, return the error
                                return done(err);
                            if (res == null || res == undefined) {
                                // person is not yet in database; add person
                                var p = new allPeople({
                                    linkedin_id: c['id'],
                                    first_name: c['firstName'],
                                    last_name: c['lastName'],
                                    location: c['location']['name'],
                                    linkedin_url: c['publicProfileUrl'],
                                    industry: c['industry']
                                });
                                p.save(function(err) {
                                    if (err) return err;
                                });
                            } else {
                                // do nothing
                                // console.log('person: ' + res + ' is already in database');
                            }
                        });
                    }
                    addUser($in);

                    user.connections = JSON.stringify(connections);
                    user.money = 5;
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

                    // finds all people that are in the same industry and location as user
                    allPeople.find({
                        location: $in['location']['name'],
                        industry: $in['industry']
                    }, 'first_name last_name industry linkedin_url', function(err, people) {
                        if (err) return err;
                        res.render('profile.ejs', {
                            user: user,
                            loginUrl: FB.getLoginUrl({
                                scope: 'publish_actions'
                            }),
                            message: req.flash('info'),
                            page: 'profile'
                        });
                    });
                });
            });
        });
    });

    // HOME PAGE (with login links) 
    app.get('/', function(req, res) {
        res.render('index.ejs', {
            layout: false
        }); // load the index.ejs file
    });

    // LINKEDIN authentication page 
    app.get('/linkedin', isLoggedIn, function(req, res) {
        res.render('linkedin.ejs', {
            layout: false
        }); // load the index.ejs file
    });

    // user match history page 
    app.get('/history', isLoggedIn, function(req, res) {
        res.render('history.ejs', {
            page: 'history'
        }); // load the index.ejs file
    });

    // user profile page 
    app.get('/user_profile', isLoggedIn, function(req, res) {
        res.render('user_profile.ejs', {
            user: req.user,
            page: 'user_profile'
        }); // load the index.ejs file
    });

    // LOGIN: show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage'),
            layout: false
        });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true, // allow flash message
        layout: false
    }));

    // SIGNUP: show the signup form
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage'),
            layout: false
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/linkedin', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true, // allow flash messages
        layout: false
    }));

    app.get('/edit_profile', isLoggedIn, function(req, res) {
        res.render('edit_profile.ejs', {
            user: req.user,
            str_user: JSON.stringify(req.user)
        });
    });

    app.post('/edit_profile', isLoggedIn, function(req, res) {
        User.findOne({
            'linkedin_id': req.body.id
        }, function(err, u) {
            if (err) throw err;
            u.linkedin_name = req.body.name;
            u.location = req.body.location;
            u.industry = req.body.industry;
            u.interests = req.body.interests;
            u.skills = req.body.skills;
            u.save(function(err) {
                if (err) return err;
                res.redirect('/user_profile');
            });
        });
    });

    // PROFILE SECTION 
    app.get('/profile', isLoggedIn, function(req, res) {
        console.log('implement algo here');
        // finds all people that are in the same industry and location as user
        // allPeople.find({
        //     location: req.user.location,
        //     industry: req.user.industry
        // }, 'first_name last_name industry linkedin_url', function(err, people) {
        //     if (err) return err;
        //     console.log(people);
        // });

        console.log('flash info: ' + req.flash('info'));

        res.render('profile.ejs', {
            user: req.user, // get the user out of session and pass to template
            loginUrl: FB.getLoginUrl({
                scope: 'publish_actions'
            }),
            message: req.flash('info'),
            page: 'profile'
        });
    });

    app.get('/fb/callback', isLoggedIn, function(req, res, next) {
        var code = req.query.code;
        if (req.query.error) {
            // user might have disallowed the app
            return res.send('login-error ' + req.query.error_description);
        } else if (!code) {
            return res.redirect('/profile');
        }
        Step(
            function exchangeCodeForAccessToken() {
                FB.napi('oauth/access_token', {
                    client_id: FB.options('appId'),
                    client_secret: FB.options('appSecret'),
                    redirect_uri: FB.options('redirectUri'),
                    code: code
                }, this);
            },
            function extendAccessToken(err, result) {
                if (err) throw (err);
                FB.napi('oauth/access_token', {
                    client_id: FB.options('appId'),
                    client_secret: FB.options('appSecret'),
                    grant_type: 'fb_exchange_token',
                    fb_exchange_token: result.access_token
                }, this);
            },
            function(err, result) {
                if (err) return next(err);
                req.session.access_token = result.access_token;
                req.session.expires = result.expires || 0;
                if (req.query.state) {
                    var parameters = JSON.parse(req.query.state);
                    parameters.access_token = req.session.access_token;
                    FB.api('/me/' + config.facebook.appNamespace + ':eat', 'post', parameters, function(result) {
                        console.log(result);
                        if (!result || result.error) {
                            return res.send(500, result || 'error');
                            // return res.send(500, 'error');
                        }
                        return res.redirect('/fb_post');
                    });
                } else {
                    return res.redirect('/fb_post');
                }
            }
        );
    });

    // Facebook Privacy Policy
    app.get('/fbprivacypolicy', function(req, res) {
        res.render('fbprivacypolicy.ejs');
    });

    // LOGOUT 
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/twauth', twit.login('/twauth', '/twitter_post'), function(req, res) {
        res.render('profile.ejs');
    });

    app.get('/twitter_post', isLoggedIn, function(req, res) {
        twit.updateStatus("I'm finding and connecting with professionals via Pongs! Check it out at pongs.herokuapp.com!",
            function(data) {
                console.log('successfully posted to twitter!');
            });
        req.flash('info', "You've posted to your Twitter page!");
        res.redirect('/profile');
    });

    app.get('/fb_post', isLoggedIn, function(req, res) {
        var body = "I'm finding and connecting with professionals via Pongs! Check it out at pongs.herokuapp.com!";
        FB.api('me/feed', 'post', {
            message: body,
            access_token: req.session.access_token
        }, function(r) {
            if (!r || r.error) {
                console.log(!r ? 'error occurred' : r.error);
            } else {
                console.log('Post Id: ' + r.id);
            }
        });
        req.flash('info', "You've posted to your Facebook page!");
        res.redirect('/profile');
    });
};

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

io.sockets.on('connection', function(socket) {
    socket.on('update currency', function(uuid, currency) {
        User.findOne({
            '_id': uuid
        }, function(err, res) {
            if (err) // if there are any errors, return the error
                return done(err);
            if (res == null || res == undefined) {
                // query was called incorrectly
            } else {
                res['money'] = Number(currency);
                res.save();
            }
        });
    });
});
