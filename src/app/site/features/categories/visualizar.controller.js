(function () {
  'use strict'
  angular.module('vivaSp')
    .controller('CategoriesViewController', CategoriesViewController);

    CategoriesViewController.$inject = ['$scope','$state'];

    function CategoriesViewController ($scope, $state) {
      $scope.state = $state;
    }
})();
