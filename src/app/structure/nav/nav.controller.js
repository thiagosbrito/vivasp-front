(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('NavController',NavController);

    NavController.$inject = ['$scope','$state','FirebaseAPI'];

    function NavController ($scope, $state, FirebaseAPI) {
      var vm = this;

      var getId = function (payload) {
        angular.forEach(payload, function (value, k) {
          value.$id = k;
        })

        return payload;
      };

      $scope.getCategories = function () {
        FirebaseAPI.getAll('categories').then(
          function (res) {
            vm.categories = getId(res.data);
          }
        )
      }();
    }
})();
