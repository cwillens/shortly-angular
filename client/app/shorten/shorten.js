angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.test = function(thing) {
    console.log(thing);
  };

  $scope.addLink = function(url) {
    Links.addOne(url);
  };
});
