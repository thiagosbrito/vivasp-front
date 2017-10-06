(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('QuemSomosController', QuemSomosController);

    QuemSomosController.$inject = ['$scope','$rootScope'];

    function QuemSomosController ($scope, $rootScope) {
      var vm = this;

      vm.style = {};

      vm.style.logo = "assets/images/logos/logo-principal.png";
      vm.style.color = "#ffd817";

      $rootScope.style = vm.style;
    }
})();
