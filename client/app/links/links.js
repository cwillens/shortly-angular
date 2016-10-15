angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $window, $location) {
  // Your code here
  $scope.data = {};
  $scope.randop = 'jnsajkhsadbjsdasd';
  $scope.signout = Auth.signout;

  $scope.onClickRedir = function(code) {
    console.log(code);
    $window.location.href = '/' + code;
    //$location.url('/' + code);
  };

  $scope.intNav = function(link) {
    $location.url(link);
  };

  Links.getAll().then(function(results) {
    $scope.data.links = results;
    // $scope.data.links.sort(function(a, b) {

    // });
  });
});
