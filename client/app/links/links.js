angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.randop = 'jnsajkhsadbjsdasd';
  $scope.signout = Auth.signout;


  Links.getAll().then(function(results) {
    $scope.data.links = results;
  });
});
