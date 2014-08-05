'use strict';

describe('github', function () {
  describe('github_repo.svc', function () {
    beforeEach(module('github'))
    var GithubRepoSvc, $httpBackend

    var repos = [
      {full_name: 'dickeyxxx/ng-modules'},
      {full_name: 'defunkt/unicorn'}
    ]

    beforeEach(inject(function (_GithubRepoSvc_, _$httpBackend_) {
      GithubRepoSvc = _GithubRepoSvc_
      $httpBackend = _$httpBackend_
    }))

    describe('#fetchByUser', function () {
      beforeEach(function () {
        $httpBackend
        .when('JSONP', 'https://api.github.com/users/undefined/repos?sort=updated&callback=JSON_CALLBACK')
        .respond({data: repos})
      })

      it('loads the repos for a user', function () {
        GithubRepoSvc.fetchByUser().then(function (repos) {
          expect(repos).to.have.length(2)
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
