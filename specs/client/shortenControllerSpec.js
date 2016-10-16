'use strict';

describe('ShortenController', function () {
  var $scope, $rootScope, $location, createController, $httpBackend, Links, $http;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Links = $injector.get('Links');
    $location = $injector.get('$location');
    $http = $injector.get('$http');

    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('ShortenController', {
        $scope: $scope,
        Links: Links,
        $location: $location,
        $http: $http
      });
    };

    createController();
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a link property on the $scope', function () {
    expect($scope.link).to.be.an('object');
  });

  it('should have a addLink method on the $scope', function () {
    expect($scope.addLink).to.be.a('function');
  });

  it('should be able to create new links with addLink()', function () {
    $httpBackend.expectPOST('/api/links').respond(201, '');
    $scope.addLink();
    $httpBackend.flush();
  });

  xit('should redirect to created link when clicked', function() {
    $http({
      method: 'POST',
      url: '/api/links',
      data: 'https://www.apple.com/'
    }).then(function() {
      $http({
        method: 'GET',
        url: '/api/links'
      }).then(function(resp) {
        console.log("THIS IS THE RESPONSE!!!!!!", resp);
        expect(true).to.equal(false);
        //for (var i = 0; i < resp.length; i++)
      }).catch(function(error) {
        console.log(error);
      });
      
    }).catch(function(error){
      console.log(error);
    });

    //we look in the database for the code, with a get request maybe
    //we go to localhost / code and see if it works
  });
});
