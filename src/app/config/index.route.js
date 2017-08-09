(function() {
  'use strict';

  angular
    .module('vivaSp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        views: {
          '': {
            templateUrl: 'app/structure/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'header@main': {
            templateUrl: 'app/structure/header/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
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


      .state('main.quemsomos',{
        url: '/quem-somos',
        templateUrl: 'app/site/features/institucional/quem-somos.html',
        controller: 'QuemSomosController',
        controllerAs: 'quemsomos'
      })

      .state('main.contato',{
        url: '/contato',
        templateUrl: 'app/site/features/institucional/contato.html',
        controller: 'ContatoController',
        controllerAs: 'contato'
      })

      .state('main.trabalhe',{
        url: '/trabalhe-conosco',
        templateUrl: 'app/site/features/institucional/trabalhe-conosco.html',
        controller: 'TrabalheConoscoController',
        controllerAs: 'trabalhe'
      })

      .state('main.marca',{
        url: '/marca-vivasp',
        templateUrl: 'app/site/features/institucional/marca-vivasp.html',
        controller: 'MarcaVivaSPController',
        controllerAs: 'marca'
      })

      .state('main.anuncie', {
        url: '/anuncie-aqui',
        templateUrl: 'app/site/features/institucional/anuncie-aqui.html',
        controller: 'AnuncieAquiController',
        controllerAs: 'anuncie'
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

  }

}).call(this);
