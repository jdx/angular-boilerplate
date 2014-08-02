'use strict';

describe('users', function () {
  it('can find this repo', function () {
    browser.get('http://localhost:3000')
    element(by.css('nav a.users')).click()
    var search = element(by.model('q'))
    search.sendKeys('dickey').sendKeys(protractor.Key.ENTER)
    element(by.cssContainingText('.users a', 'dickeyxxx')).click()
    var repo = element(by.cssContainingText('.repos a', 'dickeyxxx/ng-modules'))
    expect(repo.getAttribute('href')).toBe('https://github.com/dickeyxxx/ng-modules')
  })
})
