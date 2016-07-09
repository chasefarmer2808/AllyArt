(function() {
  'use strict';

  angular
    .module('app.home')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'Home',
        config: {
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm',
          title: 'Home',
          settings: {
            nav: 1,
            content: 'Home',
            dropdown: false
          }
        }
      }
    ];
  }
})();
