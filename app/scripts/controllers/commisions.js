'use strict';

/**
 * @ngdoc function
 * @name allyArtApp.controller:CommisionsCtrl
 * @description
 * # CommisionsCtrl
 * Controller of the allyArtApp
 */
angular.module('allyArtApp')
  .controller('CommisionsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submitEmail = function() {
      var email = {
        firstName: $scope.fname,
        lastName: $scope.lname,
        address: $scope.email,
        phone: $scope.phone,
        message: $scope.message
      };
      console.log(email);
    };
  });
