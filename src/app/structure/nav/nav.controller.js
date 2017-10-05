(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('NavController',NavController);

    NavController.$inject = ['$scope','$state','$firebaseArray','$rootScope'];

    function NavController ($scope, $state, $firebaseArray, $rootScope) {
      var vm = this;
      var catRef = firebase.database().ref('categories');
      var ActiveRef = catRef.orderByChild('showInMenu').equalTo(true)

      vm.categories = $firebaseArray(ActiveRef);
      vm.menuItems = [];

      vm.categories.$loaded().then(
        function (a) {
          angular.forEach(a, function (value) {
            if (value.active) {
              vm.menuItems.push(value);
            }
          })
        }
      );
      $rootScope.$watch('style', function (value) {
        angular.isUndefined(value) ? vm.color = "#fdc006" : vm.color = value.color;
      });
      // vm.categories = _.where(vm.categories, {active: true});
      // console.log(vm.categories);

      vm.filterName = function (value) {
        return value.toLowerCase();
      }

      // var getId = function (payload) {
      //   angular.forEach(payload, function (value, k) {
      //     value.$id = k;
      //   })
      //
      //   return payload;
      // };


    }
})();
