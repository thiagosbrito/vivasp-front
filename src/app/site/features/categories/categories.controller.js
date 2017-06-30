(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$scope', '$stateParams'];

    function CategoriesController ($scope, $stateParams) {
      var vm = this;

      vm.category = $stateParams.categoriaNome;
    }
})();
