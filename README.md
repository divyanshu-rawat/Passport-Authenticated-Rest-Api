

[![Join the chat](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/divyanshu001)
[![Contact me on Codementor](https://cdn.codementor.io/badges/contact_me_github.svg)](https://www.codementor.io/divyanshurawat?utm_source=github&utm_medium=button&utm_term=divyanshurawat&utm_campaign=github)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/r46956)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg?style=flat)](https://divyanshu.mit-license.org/)

[![Divyanshu](https://img.shields.io/badge/divyanshu-owner-brightgreen.svg?style=flat)](http://www.divyanshurawat.in)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/divyanshu-rawat)
[![Build Status](https://travis-ci.org/divyanshu-rawat/JS-Testing.svg?branch=master)](https://travis-ci.org/divyanshu-rawat/JS-Testing)
[![NPM](https://img.shields.io/badge/npm-v3.10.10-blue.svg)](https://www.npmjs.com/package/npm)

##

#### Description 
* Built a rest Api in Node.js by leveraging below-mentioned Node.js modules.
* Used JSON web tokens for token-based user authentication
* Used Passport module together with passport-local and passport-local-mongoose for setting up local authentication within     server.
* Used Mongoose population to cross-reference users within a comment.
* Configured a secure server in Node using the core HTTPS module.
* Generated the private key and public certificate and configure the HTTPS server.
* Used an OAuth providers for authenticating users within your server.
* Set up your server using Passport OAuth modules to enable user authentication using OAuth providers.

##

#### How it works !

* Checks if a verified ordinary user also has admin privileges.
* Allow an ordinary user to only perform GET operatioins
* Only allows Admin to perform POST, PUT and DELETE operations
* Only allows Admin to be able to GET all the registered users' information from the database

##

#### Installation Instructions :grey_exclamation:

* Clone or download the repo. into any fresh temporary folder.

* Cd into that root folder you just cloned locally.

* Open terminal in the current folder and to install all dependencies type 

```javascript
   npm install 
```

* Now typing 

```javascript
   npm start 
```

* will start a server !

##

#### DB Used (MongoDB)

* MLab's MongoDB hosting platform is the fastest growing cloud Database-as-a-Service in the world. Get started with a free database and expert support.

##

#### Package Manager Used (NPM)

* NPM is the default package manager for the JavaScript runtime environment Node.js.

##

#### Package.json (dependencies)
  
* For dependencies refer Package.json.

##

#### For Testing (Postman)

* Postman extension can be used for testing !
* Supercharge your API workflow with Postman! Build, test, and document your APIs faster.
* You can now fire up postman and then perform several operations on the REST API.

##

#### Sample Data (db.json)

*  You can use the data for all the dishes,promotions and leadership provided in the db.json file .

##

### Contributing

1. Create your **_branch_**: `git checkout -b my-new-feature`

2. **_Commit_** your changes: `git commit -m 'Add some feature'`

3. **_Push_** to the branch: `git push origin my-new-feature`

4. Send a **Pull Request**

5. **_Enjoy!_**

##

#### Examples

* POST Request to URL localhost:3443/users/register  (For user registration !)

![alt tag](https://github.com/divyanshu-rawat/Passport_authentication-Node.js/blob/master/snapshots/user_reg.png)

##

* POST Request to URL localhost:3443/users/login     (For user login !)

![alt tag](https://github.com/divyanshu-rawat/Passport_authentication-Node.js/blob/master/snapshots/user_login.png)

##

* GET Request to URL localhost:3443/dishes/          (User Authenticated !)

![alt tag](https://github.com/divyanshu-rawat/Passport_authentication-Node.js/blob/master/snapshots/token.png)

##

