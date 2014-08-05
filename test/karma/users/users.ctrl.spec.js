'use strict';

describe('users', function () {
  describe('users.ctrl', function () {
    beforeEach(module('users'))
    var $scope

    var fakeGithubService = {}

    var users = [
      {login: 'dickeyxxx'},
      {login: 'defunkt'}
    ]

    beforeEach(inject (function ($q) {
      fakeGithubService.fetch = function () {
        var deferred = $q.defer()
        deferred.resolve(users)
        return deferred.promise
      }
      fakeGithubService.search = function () {
        var deferred = $q.defer()
        deferred.resolve([users[0]])
        return deferred.promise
      }
    }))

    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new()
      $controller('UsersCtrl', {
        $scope: $scope,
        GithubUserSvc: fakeGithubService
      })
    }))

    it('loads the users', function () {
      $scope.$digest()
      expect($scope.users).to.have.length(2)
    })

    it('searches for users', function () {
      sinon.spy(fakeGithubService, 'search')
      $scope.search('dickeyxxx')
      $scope.$digest()
      expect($scope.users).to.have.length(1)
      expect(fakeGithubService.search).to.have.been.calledWith('dickeyxxx')
    })
  })
})
