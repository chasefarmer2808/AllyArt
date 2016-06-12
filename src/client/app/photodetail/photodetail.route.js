(function() {
  'use strict';

  angular
    .module('app.photodetail')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'photodetail',
        config: {
          url: '/gallery/album/:photoId',
          templateUrl: 'app/photodetail/photodetail.html',
          controller: 'PhotodetailController',
          controllerAs: 'vm',
          title: 'Photodetail',
          settings: {
            nav: 0,
            content: 'Photodetail'
          }
        }
      }
    ];
  }
})();
