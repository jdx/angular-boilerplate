'use strict';
angular.module('github')
.service('GithubRepoSvc', function ($http) {
  this.fetchByUser = function (login) {
    return $http.jsonp('https://api.github.com/users/' + login + '/repos?sort=updated&callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }
})
