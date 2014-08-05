'use strict';

describe('github', function () {
  describe('github_user.svc', function () {
    beforeEach(module('github'))
    var GithubUserSvc, $httpBackend

    var users = [
      {login: 'dickeyxxx'},
      {login: 'defunkt'}
    ]

    beforeEach(inject(function (_GithubUserSvc_, _$httpBackend_) {
      GithubUserSvc = _GithubUserSvc_
      $httpBackend = _$httpBackend_
    }))

    describe('#fetch', function () {
      beforeEach(function () {
        $httpBackend
        .when('JSONP', 'https://api.github.com/users?callback=JSON_CALLBACK')
        .respond({data: users})
      })

      it('pulls down users', function () {
        GithubUserSvc.fetch().then(function (users) {
          expect(users).to.have.length(2)
        })
      })
    })

    describe('#find', function () {
      beforeEach(function () {
        $httpBackend
        .when('JSONP', 'http://api.github.com/users/dickeyxxx?callback=JSON_CALLBACK')
        .respond({data: users[0]})
      })

      it('pulls down dickeyxxx', function () {
        GithubUserSvc.find('dickeyxxx').then(function (users) {
          expect(users.login).to.equal('dickeyxxx')
        })
      })
    })

    describe('#search', function () {
      beforeEach(function () {
        $httpBackend
        .when('JSONP', 'https://api.github.com/search/users?q=dickeyxxx&callback=JSON_CALLBACK')
        .respond({data: {items: users}})
      })

      it('searches for dickeyxxx', function () {
        GithubUserSvc.search('dickeyxxx').then(function (users) {
          expect(users).to.have.length(2)
        })
      })
    })

    afterEach(function () {
      $httpBackend.flush()
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })
  })
})
