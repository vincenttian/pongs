// app/models/user.js
// load the things we need
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    linkedin_id: String,
    linkedin_token: String,
    linkedin_email: String,
    linkedin_name: String,
    local_id: String,
    local_password: String,
    connections: String,
    courses: String,
    follow_companies: String,
    follow_people: String,
    groups: String,
    interests: String,
    skills: String,
    location: String,
    positions: String,
    picture: String,
    linkedin_url: String,
    industry: String,
    money: Number
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local_password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
