angular.module('users')
.controller('UsersCtrl', function ($scope, GithubUserSvc) {
  GithubUserSvc.fetch().then(function (users) {
    $scope.users = users
  })

  $scope.search = function (q) {
    GithubUserSvc.search(q).then(function (users) {
      $scope.users = users
    })
  }
})
