(function() {
  'use strict';

  angular
    .module('app.gallery')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'gallery',
        config: {
          url: '/gallery',
          templateUrl: 'app/gallery/gallery.html',
          controller: 'GalleryController',
          controllerAs: 'vm',
          title: 'Gallery',
          settings: {
            nav: 3,
            content: 'Gallery',
            dropdown: true
          }
        }
      }
    ];
  }
})();
