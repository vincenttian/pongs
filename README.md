#LinkedIn Tinder

###ByVincent Tian and Jordeen Chang

###Wireframe
Invision: http://invis.io/p/QDZ22SCG

###Backlog
Trello: https://trello.com/b/5ThUckdH/tindermeetslinkedin

###Technologies Used:
Node.js Authentication:
http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local

Node.js LinkedIn API:
https://github.com/Kuew/node-linkedin

Javascript Graph Library:
https://github.com/fkling/JSNetworkX

Mongoose Docs:
http://mongoosejs.com/docs/

Node.js FB API:
https://github.com/Thuzi/facebook-node-sdk

Node.js Twitter API:
https://github.com/desmondmorris/node-twitter

###MongoDB


#####Start up the server

$ sudo mongod

#####Local Mongo shell

$ mongo


	Use a database

	> use <database>


	Show all db's

	> show dbs


	Show all collections

	> show collections


	Query all users

	> db.users.find()


	Find Specific User

	> db.users.findOne({linkedin_email:'jordeenchang@gmail.com'})


	Drop Specific collection

	> db.users.drop()


	Find All people in Bay Area

	> db.allpeoples.find({location: "San Francisco Bay Area"})


	Find All people in computer software industry

	> db.allpeoples.find({industry: "Computer Software"})


	Find All people in the Bay Area in the computer software industry

	> db.allpeoples.find({industry: "Computer Software", location: "San Francisco Bay Area"})

#####Production VS Development
To switch between dev and prod, uncomment/comment the database and redirect url in server.js and configs/routes.js. Also change the redirect url for the fb wall post feature.
