(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('fbservice', fbservice);

  fbservice.$inject = ['$http', 'exception', 'logger'];

  function fbservice($http, exception, logger) {
    var service = {
      getAlbums: getAlbums
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
  }
})();
