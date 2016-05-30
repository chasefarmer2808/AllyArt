'use strict';

/**
 * @ngdoc function
 * @name allyArtApp.controller:PhotodetailCtrl
 * @description
 * # PhotodetailCtrl
 * Controller of the allyArtApp
 */
angular.module('allyArtApp')
  .controller('PhotodetailCtrl', function ($scope, $routeParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.photo_id = $routeParams.photoId;

    var token = 'EAAQDMonnluYBAFV8zuLubW4pPDIrl1pDc8koaYO1gfCYdhwqZAwlWtqC03g1jZBX4H77YvW0ZBDk4nmt2IJrk99VwalUF0OZC11oIBsnZCtuZCP5MinbOM8r7R0ZAM2J6rIOnxLQQDx2feTZCRZCQdb6ZAkmFcMD2Ex00ZD',
        field = 'fields=picture, name',
        id = $scope.photo_id,
        FBUrl = 'https://graph.facebook.com/v2.6/' + id + '?access_token=' + token + '&' + field;

    $http.get(FBUrl).then(function(response) {
      console.log(response);
      $scope.source = response.data.picture;
      $scope.name = response.data.name;
    });
  });
