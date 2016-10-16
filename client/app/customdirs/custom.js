angular.module('shortly')
  .directive('testDir', function() {
    return {
      template: '<h1>HELLO</h1>',
      restrict: 'AE'
    };
  });