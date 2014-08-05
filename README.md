Example Angular App
===================

[![wercker status](https://app.wercker.com/status/7226856f48f0ccaa877efd6302126765/s/master "wercker status")](https://app.wercker.com/project/bykey/7226856f48f0ccaa877efd6302126765)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This is a demo app you can use to get starting writing an angular app of your own. It simply shows some GitHub info. Fully tested and production ready.

Features include:

* Angular.js
* ng-route
* gulp for building css/js using [the concat method](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917)
* minified assets with cdn rev filenames
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
