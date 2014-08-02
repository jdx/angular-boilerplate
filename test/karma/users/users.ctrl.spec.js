'use strict';

describe('users', function () {
  describe('users.ctrl', function () {
    beforeEach(module('users'))
    var $scope, GithubUserSvc, $q

    var users = [
      {login: 'dickeyxxx'},
      {login: 'defunkt'}
    ]

    function fakeGithubService() {
      var deferredUsers = $q.defer()
      var deferredSearch = $q.defer()
      deferredUsers.resolve(users)
      deferredSearch.resolve([users[0]])
      return {
        fetch: jasmine.createSpy('fetch').andReturn(deferredUsers.promise),
        search: jasmine.createSpy('fetch').andReturn(deferredSearch.promise)
      }
    }

    beforeEach(inject(function ($rootScope, $controller, _$q_) {
      $q = _$q_
      $scope = $rootScope.$new()
      GithubUserSvc = fakeGithubService()
      $controller('UsersCtrl', {
        $scope: $scope,
        GithubUserSvc: GithubUserSvc
      })
    }))

    it('loads the users', function () {
      $scope.$digest()
      expect($scope.users.length).toBe(2)
    })

    it('searches for users', function () {
      $scope.search('dickeyxxx')
      $scope.$digest()
      expect(GithubUserSvc.search).toHaveBeenCalledWith('dickeyxxx')
      expect($scope.users.length).toBe(1)
    })
  })
})
