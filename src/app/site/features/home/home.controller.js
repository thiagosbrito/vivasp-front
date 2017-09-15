(function () {
  'use strict';

  angular.module('vivaSp')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state','$firebaseArray'];

    function HomeController ($scope, $state, $firebaseArray) {
      var vm = this;

      var bannersRef = firebase.database().ref('banners');
      var carouselRef = bannersRef.child('carousel');
      var query = carouselRef.orderByChild('active').equalTo(true);

      vm.banners = $firebaseArray(query);

      // var getId = function (payload) {
      //   angular.forEach(payload, function (value, k) {
      //     value.$id = k;
      //   })
      //
      //   return payload;
      // };
      //
      // $scope.getCategories = function () {
      //   FirebaseAPI.getAll('categories').then(
      //     function (res) {
      //       vm.categories = getId(res.data);
      //       console.log(vm.categories);
      //     }
      //   )
      // }();

    }
})();
