(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('NavController',NavController);

    NavController.$inject = ['$scope','$state','$firebaseArray'];

    function NavController ($scope, $state, $firebaseArray) {
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
