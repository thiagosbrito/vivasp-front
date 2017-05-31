(function() {
  'use strict';

  angular
    .module('gulpApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      /***
      *  STRUCTURE
      ***/
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: 'app/structure/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'header@main': {
            templateUrl: 'app/structure/header/header.html'
          },
          'nav@main': {
            templateUrl: 'app/structure/nav/nav.html'
          },
          'footer@main': {
            templateUrl: 'app/structure/footer/footer.html'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
  }

}).call(this);
