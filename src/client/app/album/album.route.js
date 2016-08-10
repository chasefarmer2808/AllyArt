(function() {
  'use strict';

  angular
    .module('app.album')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'album',
        config: {
          url: '/gallery/:albumId',
          templateUrl: 'app/album/album.html',
          controller: 'AlbumController',
          controllerAs: 'vm',
          title: 'Album',
          settings: {
            nav: 0,
            content: 'Album',
          }
        }
      }
    ];
  }
})();
