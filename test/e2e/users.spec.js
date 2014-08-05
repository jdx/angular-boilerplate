'use strict';
var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = chai.expect

describe('users', function () {
  it('can find this repo', function () {
    browser.get(browser.params.baseUrl)
    element(by.css('nav a.users')).click()
    var search = element(by.model('q'))
    search.sendKeys('dickey').sendKeys(protractor.Key.ENTER)
    element(by.cssContainingText('.users a', 'dickeyxxx')).click()
    var repo = element(by.cssContainingText('.repos a', 'dickeyxxx/ng-modules'))
    expect(repo.getAttribute('href')).to.eventually.equal('https://github.com/dickeyxxx/ng-modules')
  })
})
