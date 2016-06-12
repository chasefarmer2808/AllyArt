(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('fbservice', fbservice);

  fbservice.$inject = ['$http', 'exception', 'logger'];

  function fbservice($http, exception, logger) {
    var service = {
      getAlbums: getAlbums,
      getAlbum: getAlbum,
      getPhoto: getPhoto
    }

    return service;

    function getAlbums() {
      return $http.get('api/albums')
        .then(success)
        .catch(fail);

      function success(response) {
        console.log(response);
        return response.data.albums.data;
      }

      function fail(e) {
        console.log(e);
      }
    }

    function getAlbum(id) {
      return $http.get('api/albums/' + id)
        .then(success)
        .catch(fail);

      function success(response) {
        console.log(response);
        return response.data.photos;
      }

      function fail(e) {
        console.log(e);
      }
    }

    function getPhoto(id) {
      return $http.get('api/photo/' + id)
        .then(success)
        .catch(fail);

      function success(response) {
        console.log('Photo: ',response);
        return response.data;
      }

      function fail(e) {
        console.log(e);
      }
    }
  }
})();
