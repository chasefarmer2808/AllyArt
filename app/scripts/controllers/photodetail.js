'use strict';

/**
 * @ngdoc function
 * @name allyArtApp.controller:PhotodetailCtrl
 * @description
 * # PhotodetailCtrl
 * Controller of the allyArtApp
 */
angular.module('allyArtApp')
  .controller('PhotodetailCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.photo_id = $routeParams.photoId;

  });
