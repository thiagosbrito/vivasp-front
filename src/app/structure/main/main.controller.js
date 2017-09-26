(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('MainController', MainController);

    /* @ngInject */
    function MainController ($scope, $state, $location, $log, $rootScope) {


      var $ctrl = this;

      $ctrl.GetClass = function () {
        var state = $state;
        console.log(state);
        return 'default';
      }
    }
})();
