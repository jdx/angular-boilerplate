'use strict';

describe('app', function () {
  beforeEach(module('app'))

  describe('routes', function () {
    var $route

    beforeEach(inject(function (_$route_) {
      $route = _$route_
    }))

    it('has a root route', function () {
      expect($route.routes['/'].templateUrl).to.equal('/templates/home.html')
    })
  })
})
