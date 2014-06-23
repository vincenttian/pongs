// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var allPeopleSchema = mongoose.Schema({
    linkedin_id: String,
    first_name: String,
    last_name: String,
    location: String,
    linkedin_url: String,
    industry: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('allPeople', allPeopleSchema);
