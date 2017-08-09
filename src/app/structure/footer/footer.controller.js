(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$state','$location', '$anchorScroll'];

    function FooterController ($scope, $state, $location, $anchorScroll) {

      var vm = this;

      $scope.goToTop = function() {
        $anchorScroll();
      };

    }
})();
