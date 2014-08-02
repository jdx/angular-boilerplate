'use strict';
angular.module('github')
.service('GithubUserSvc', function ($http) {
  this.fetch = function () {
    return $http.jsonp('https://api.github.com/users?callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }

  this.search = function (q) {
    return $http.jsonp('https://api.github.com/search/users?q=' + q + '&callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data.items
    })
  }

  this.find = function (login) {
    return $http.jsonp('http://api.github.com/users/' + login + '?callback=JSON_CALLBACK')
    .then(function (response) {
      return response.data.data
    })
  }
})
