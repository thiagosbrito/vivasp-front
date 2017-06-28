(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$state','$location', '$anchorScroll'];

    function FooterController ($scope, $state, $location, $anchorScroll) {
      var vm = this;
      $scope.goToTop = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        // $location.hash('topo');

        // call $anchorScroll()
        $anchorScroll();
      };
    }
})();
