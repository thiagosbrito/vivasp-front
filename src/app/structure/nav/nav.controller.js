(function () {
  'use strict';
  angular.module('vivaSp')
    .controller('NavController',NavController);

    NavController.$inject = ['$scope','$state','$firebaseArray'];

    function NavController ($scope, $state, $firebaseArray) {
      var vm = this;
      var catRef = firebase.database().ref('categories');

      vm.categories = $firebaseArray(catRef);
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
