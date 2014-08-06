Example Angular App
===================

[![wercker status](https://app.wercker.com/status/7226856f48f0ccaa877efd6302126765/s/master "wercker status")](https://app.wercker.com/project/bykey/7226856f48f0ccaa877efd6302126765)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This is a demo app you can use to get starting writing an angular app of your own. It simply shows some GitHub info. Fully tested and production ready.

Features include:

* Angular.js
* ng-route
* gulp for building css/js using [the concat method](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917)
* minified assets with aggressive cache-compatible cdn filenames (rev)
* uses angular templatecache to preload templates
* bower for external css/js assets
* jshint for linting JS style
* Bootstrap for UI
* Less for writing CSS
* static asset node server w/ gzip
* mocha/chai for testing
* karma unit testing w/ PhantomJS
* Protractor end-to-end testing with Firefox and Chrome
* [CI on wercker](https://app.wercker.com/project/bykey/7226856f48f0ccaa877efd6302126765)
* Heroku-ready

[See it in action](https://angular-boilerplate.herokuapp.com/)

Running Locally
===============

Get the repo

    $ git clone https://github.com/dickeyxxx/angular-boilerplate
    $ cd angular-boilerplate

Install dependencies

    $ npm install -g gulp karma-cli protractor
    $ npm install

Install protractor dependencies (chromedriver)

    $ ./node_modules/.bin/webdriver-manager update


Run the test suite

    $ npm test

Alternatively run just one of the test components

    $ jshint .
    $ karma start
    $ protractor

Structure
=========

```
│
├── LICENSE                   ISC
├── README.md                 this file
├── app.json                  defines how to deploy on Heroku
├── bower.json                defines third-party css/js - downloads to /assets
├── gulpfile.js               includes gulp files in /gulp - also defines meta gulp tasks
├── index.html.ejs            layout html file
├── karma.conf.js             karma test config
├── package.json              npm dependencies and scripts
├── protractor.chrome.conf.js runs e2e tests on chrome
├── protractor.conf.js        runs e2e tests on firefox
├── server.js                 static node server - hosts /assets, /public and index.html.ejs
├── wercker.yml               CI configuration
│
├── assets/                   served from /assets with 1-year cache expiration - not intended to be committed
│   ├── app.css                 compiled css assets
│   ├── app.js                  compiles js assets
│   ├── rev-manifest.json       mapping from assets to assets with hash in filename
│   ├── app-89c296c2.css        copy of app.css with hash of contents in filename for aggressive CDN caching
│   ├── app-9b04b598.js         copy of app.js with hash of contents in filename for aggressive CDN caching
│   └── ...                     all bower components - can be rev'd in gulp/rev.js
│
├── css/                      less files
│   ├── app.less                main less file
│   └── ...                     other less files - can also require files from /assets
│
├── coverage/                 code coverage html
│
├── gulp/                       gulp tasks - gulpfile.js will pick up any js file here
│   ├── css.js                  compiles less -> css
│   ├── js.js                   concatenates + minifies js
│   ├── rev.js                  aggressive cdn cache filename creator
│   └── server.js               runs a dev server
│
├── public/                   any public files that need to be served - served from /
│   ├── angularjs.png
│   └── favicon.ico
│
├── src/                      angular files
│   ├── module.js               defines the 'app' ng-module
│   ├── routes.js               routing info for ng-route
│   ├── github/
│   │   ├── module.js             defines the 'github' ng-module
│   │   ├── github_repo.svc.js    service that gets repos from GitHub via JSONP
│   │   └── github_user.svc.js    service that gets users from GitHub via JSONP
│   └── users/
│       ├── module.js             defines the 'users' ng-module
│       ├── show_user.ctrl.js     controller for showing a single user's info + repos
│       └── users.ctrl.js         controller for showing many users + searching through users
│
├── templates/                angular templates
│   ├── home.html               main template
│   ├── nav.html                header nav template (included via ng-include in /index.html.ejs)
│   ├── show_user.html          template for users.ShowUserCtrl
│   └── users.html              template for users.UsersCtrl
│
└── test/
    ├── e2e/                    feature/protractor tests
    │   ├── init.js               boots a server for e2e tests]
    │   └── users.spec.js         tests the flow of finding a user and one of their repos
    └── karma/                  unit/karma tests
        ├── routes.spec.js
        ├── github/
        │   ├── github_repo.svc.spec.js
        │   └── github_user.svc.spec.js
        └── users/
            ├── show_user.ctrl.spec.js
            └── users.ctrl.spec.js
```
