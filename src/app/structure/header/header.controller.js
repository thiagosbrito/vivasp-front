(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope','$state','$stateParams'];

    function HeaderController ($scope, $state, $stateParams) {

      var vm = this;
      vm.state = $state.params.categoriaNome

    }
})();
