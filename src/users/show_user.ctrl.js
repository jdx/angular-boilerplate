angular.module('users')
.controller('ShowUserCtrl', function ($scope, $routeParams, GithubUserSvc, GithubRepoSvc) {
  GithubUserSvc.find($routeParams.login).then(function (user) {
    $scope.user = user
  })

  GithubRepoSvc.fetchByUser($routeParams.login).then(function (repos) {
    $scope.repos = repos
  })
})
