'use strict';

describe('users', function () {
  describe('show_user.ctrl', function () {
    beforeEach(module('users'))
    var $scope

    var $routeParams = {login: 'dickeyxxx'}
    var fakeGithubService = {}
    var fakeGithubRepoService = {}

    beforeEach(inject (function ($q) {
      fakeGithubService.find = function (login) {
        var deferred = $q.defer()
        deferred.resolve({login: login})
        return deferred.promise
      }
      fakeGithubRepoService.fetchByUser = function () {
        var deferred = $q.defer()
        deferred.resolve([
          {name: 'foo'},
          {name: 'bar'}
        ])
        return deferred.promise
      }
    }))

    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new()
      $controller('ShowUserCtrl', {
        $scope: $scope,
        $routeParams: $routeParams,
        GithubUserSvc: fakeGithubService,
        GithubRepoSvc: fakeGithubRepoService
      })
    }))

    it('loads the user', function () {
      $scope.$digest()
      expect($scope.user.login).to.equal('dickeyxxx')
    })

    it("loads the user's repos", function () {
      $scope.$digest()
      expect($scope.repos).to.have.length(2)
    })
  })
})
