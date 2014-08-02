angular.module('app')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
  .when('/', {templateUrl: '/templates/home.html'})
  .when('/users', {controller: 'UsersCtrl', templateUrl: '/templates/users.html'})
  .when('/users/:login', {controller: 'ShowUserCtrl', templateUrl: '/templates/show_user.html'})
})
