'use strict';

angular.module('allyArtApp').controller('NavbarController', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(loc) {
    return loc === $location.path();
  };
}]);
