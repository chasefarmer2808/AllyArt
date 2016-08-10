(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('htTopNav', htTopNav);

  /* @ngInject */
  function htTopNav() {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        'navline': '='
      },
      templateUrl: 'app/layout/ht-top-nav.html'
    };

    TopNavController.$inject = ['$scope', 'fbservice', '$q', 'routerHelper'];

    /* @ngInject */
    function TopNavController($scope, fbservice, $q, routerHelper) {
      var vm = this;
      $scope.isCollapsed = true;
      vm.albums = [];
      var states = routerHelper.getStates();

      getNavRoutes();
      activate();

      function activate() {
        var promises = [getAlbums()];
        return $q.all(promises);
      }

      function getAlbums() {
        return fbservice.getAlbums().then(function(data) {
          angular.forEach(data, function(album) {
            if (album.name != 'Timeline Photos' && album.name != 'Cover Photos' && album.name != 'Mobile Uploads' && album.name != 'Profile Pictures') {
              vm.albums.push(album);
            }
          });
          console.log('albums: ', vm.albums);
        });
      }

      function getNavRoutes() {
        vm.navRoutes = states.filter(function(r) {
          return r.settings && r.settings.nav;
        }).sort(function(r1, r2) {
          return r1.settings.nav - r2.settings.nav;
        });
      }
    }

    return directive;
  }
})();
