(function () {
  'use strict';

  angular.module('gulpApp')
    .controller('MainController', MainController);

    /* @ngInject */
    function MainController ($scope, $state, $location, $log, $rootScope) {
      var vm = this;
      $location.search().utm_source ? vm.location = $location.search().utm_source : vm.location = 'default';
      $rootScope.env = vm.location;
      vm.hello = vm.location;

      $rootScope.$on('loader_show', function (value) {
        value ? vm.showLoader = true : vm.showLoader = false;
      })

      $rootScope.$on('loader_hide', function (value) {
        value ? vm.showLoader = false : vm.showLoader = true;
      })
    }
})();
