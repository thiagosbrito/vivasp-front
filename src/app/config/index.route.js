(function() {
  'use strict';

  angular
    .module('vivaSp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      /***
      *  STRUCTURE
      ***/
      .state('main', {
        url: '',
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
            templateUrl: 'app/structure/footer/footer.html',
            controller: 'FooterController',
            controllerAs: 'footer'
          }
        }
      })

      .state('main.home', {
        url:'/home',
        templateUrl: 'app/site/features/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })

      .state('main.categories',{
        url: '/categoria/:categoriaNome',
        templateUrl: 'app/site/features/categories/categories.html',
        controller: 'CategoriesController',
        controllerAs: 'category'
      })
      /*cinema
      musica
      danca
      exposicão
      curso
      lazer
      gastronomia
      teatro
      literatura*/

      $urlRouterProvider.otherwise('/');
  }

}).call(this);
