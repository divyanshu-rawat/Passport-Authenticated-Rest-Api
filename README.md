
### Description 

* Used JSON web tokens for token-based user authentication
* Used Passport module together with passport-local and passport-local-mongoose for setting up local authentication within     server.
* Use Mongoose population to cross-reference users within a comment.
* Configured a secure server in Node using the core HTTPS module.
* Generated the private key and public certificate and configure the HTTPS server.
* Used an OAuth providers for authenticating users within your server.
* Set up your server using Passport OAuth modules to enable user authentication using OAuth providers.

### How it works !

* Checks if a verified ordinary user also has admin privileges.
* Allow an ordinary user to only perform GET operatioins
* Only allows Admin to perform POST, PUT and DELETE operations
* Only allows Admin to be able to GET all the registered users' information from the database

### Installation Instructions :grey_exclamation:

* Clone or download the repo. into any fresh temporary folder.

* Cd into that root folder you just cloned locally.

* Open terminal in the current folder and type node app.js 

* This will start a server at http://localhost:3001

### DB Used (MongoDB)

* MLab's MongoDB hosting platform is the fastest growing cloud Database-as-a-Service in the world. Get started with a free database and expert support.

### Package Manager Used (NPM)

* NPM is the default package manager for the JavaScript runtime environment Node.js.

### Package.json (dependencies)
 
 "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0",
    "mongoose-currency": "~0.2.0",
    "mongoose": "~4.7.2",
    "passport-local": "~1.0.0",
    "passport": "~0.3.2",
    "passport-local-mongoose": "~4.0.0"
  }

### For Testing (Postman)

* Postman extension can be used for testing !
* Supercharge your API workflow with Postman! Build, test, and document your APIs faster.
* You can now fire up postman and then perform several operations on the REST API.


### Sample Data (db.json)

*  You can use the data for all the dishes,promotions and leadership provided in the db.json file .

### Example 

* POST Request to URL localhost:3001/users/register  (For user registration !)

![alt tag](https://github.com/divyanshu-rawat/Passport_authentication-Node.js/blob/master/snapshots/user_reg.png)

* POST Request to URL localhost:3001/users/login     (For user login !)

![alt tag](https://github.com/divyanshu-rawat/Passport_authentication-Node.js/blob/master/snapshots/user_login.png)


* GET Request to URL localhost:3001/dishes/          (User Authenticated !)

![alt tag](https://github.com/divyanshu-rawat/Passport_authentication-Node.js/blob/master/snapshots/token.png)



