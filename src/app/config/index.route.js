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
        url: '',
        views: {
          '': {
            templateUrl: 'app/structure/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'header@main': {
            templateUrl: 'app/structure/main/header.html'
          }
        }
      })

      .state('main.welcome', {
        url: '/welcome',
        templateUrl: 'app/components/welcome/welcome.html',
        controller: 'WelcomeController',
        controllerAs: 'welcome'
      })
      .state('main.credenciamento', {
        url: '/credenciamento',
        templateUrl: 'app/components/credenciamento/form-1.html',
        controller: 'CredenciamentoController',
        controllerAs: 'credentials'
      })
      .state('main.cadastro-cartao', {
        url: '/cadastrar-cartao',
        templateUrl: '/app/components/credenciamento/form-2.html',
        controller: 'CadastrarCartaoController',
        controllerAs: 'cadastro'
      })


      $urlRouterProvider.otherwise('/');
  }

}).call(this);
